<svelte:options accessors />

<script lang="ts">
	import { onMount } from 'svelte';
	import ICON_ARROW from '@/assets/icon/arrow_down_224071.svg';
	import globalVars from '@/vars/GlobalVars';
	import NavBarItems from './NavBar-Items.svelte';
	import type RouteInfo from '@/model/RouteInfo';
	import { list as navigationsLinks } from '@/model/RouteInfo';

	export let isScrollDown = false;
	export let onItemSelected = (item: RouteInfo) => {};
	export let onExpand = (expand: boolean) => {};
	export let isBadgeCollapse: boolean;

	let pathname = '';
	let isExpand = false;
	let title = '';
	let header = '';

	const invalidateItem = (item: RouteInfo) => {
		pathname = window.location.pathname;
		isExpand = false;
		title = item.title;
		header = item.header;
		onItemSelected(item);
		setTimeout(() => {
			onExpand(isExpand);
		}, 400);
	};
	const invalidateTitle = () => {
		pathname = window.location.pathname;
		const item = navigationsLinks.find((navigationsLink) => navigationsLink.path === pathname);
		if (item) invalidateItem(item);
	};
	const toggleExpand = () => {
		isExpand = !isExpand;
		onExpand(isExpand);
	};

	// lifecycles
	onMount(() => {
		invalidateTitle();
		window.addEventListener('popstate', () => invalidateTitle());
	});
</script>

<svelte:head>
	<title>{header}</title>
</svelte:head>

<div class="NavBar {isScrollDown ? 'NavBar-isScrolledUp' : 'NavBar-isScrolledDown'}">
	<nav
		class="
			NavBar-bar 
			{isExpand ? 'NavBar-bar-isExpand' : 'NavBar-bar-isCollapsed'}  
			{isBadgeCollapse ? '' : 'NavBar-bar-badgeCollapse'}
		"
	>
		<!-- svelte-ignore a11y-missing-content -->
		<a class="NavBar-logo" style="grid-area: logo" href="/" on:click={() => invalidateTitle()} />

		<span class="NavBar-title" style="grid-area: title">{title}</span>
		<div class="NavBar-items" style="grid-area: items">
			<NavBarItems onClickItem={(item) => invalidateItem(item)} />
		</div>

		<button
			class="NavBar-toggle"
			style="grid-area: toggle; {isExpand ? 'transform: rotate(180deg)' : ''}"
			on:click={toggleExpand}
		>
			<img class="NavBar-toggle-icon" src={ICON_ARROW} alt="Click to Expand" />
		</button>
	</nav>
</div>

<style lang="scss">
	.NavBar {
		--height: var(--navbar-height);
		height: var(--height);

		width: 100%;
		z-index: 3;
		position: sticky;
		top: 0;
		left: 0;
		right: 0;

		.NavBar-bar {
			--margin: 1rem;
			height: var(--height);

			--blur: 1em;
			-webkit-backdrop-filter: blur(var(--blur));
			backdrop-filter: blur(var(--blur));

			background: hsla(0, 0%, 100%, 0.3);
			transition: all 0.3s;

			display: grid;

			.NavBar-logo {
				--size: var(--height);
				width: var(--size);
				height: var(--size);
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.NavBar-title {
				height: var(--height);
				color: #224071;
				font-size: 1.5rem;
				font-weight: 900;
				flex-grow: 1;
				display: flex;
				align-items: center;
			}

			.NavBar-items {
				width: 100%;
				height: var(--height);
				overflow-y: visible;
				overflow-x: auto;

				gap: 1rem;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-start;
				flex-wrap: nowrap;

				padding: 1.5rem 2rem 1.5rem 0.5rem;

				--scrollbar-size: 0.3em;
				--scrollbar-thumb-radius: 1rem;
				--scrollbar-track-margin: 0.5rem;
				--scrollbar-thumb-color: hsla(0, 0%, 0%, 0.2);
				--scrollbar-thumb-color-hover: hsla(0, 0%, 0%, 0.3);
				--scrollbar-track-color: hsla(0, 0%, 0%, 0.05);
				--scrollbar-track-color-hover: hsla(0, 0%, 0%, 0.05);

				scrollbar-width: var(--scrollbar-size);
				scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color);

				&::-webkit-scrollbar {
					height: var(--scrollbar-size);
					width: var(--scrollbar-size);
				}

				&::-webkit-scrollbar-thumb {
					border-radius: var(--scrollbar-thumb-radius);
					background-color: var(--scrollbar-thumb-color);

					&:hover {
						background-color: var(--scrollbar-thumb-color-hover);
					}
				}

				&::-webkit-scrollbar-track {
					margin: var(--scrollbar-track-margin);
					background-color: var(--scrollbar-track-color);

					&:hover {
						background-color: var(--scrollbar-track-color-hover);
					}
				}
			}

			.NavBar-toggle {
				--margin: 0;
				--size: var(--height);
				width: var(--size);
				height: var(--size);
				transition: 300ms;
				border-radius: 50%;

				display: grid;
				place-items: center;

				-webkit-tap-highlight-color: transparent;

				&:hover {
					.NavBar-toggle-icon {
						transform: scale(1.1);
					}
				}

				&:focus {
					.NavBar-toggle-icon {
						transform: scale(0.8);
					}
				}

				.NavBar-toggle-icon {
					width: calc(var(--size) * 0.8);
					height: calc(var(--size) * 0.8);
					padding: 1.4rem;
					transition: 300ms;
					border-radius: 50%;
				}
			}
		}
	}

	// when small
	@media (max-width: 500px) {
		.NavBar {
			.NavBar-bar {
				grid-template-columns: var(--height) 1fr calc(var(--height));
				grid-template-rows: var(--height) 1fr;
				grid-template-areas:
					'logo title toggle'
					'items items items';

				position: sticky;
				top: 0;
				left: 0;
				width: 100%;
				max-width: 100%;

				.NavBar-items {
					z-index: 1;

					width: 100%;
					height: 100%;
					padding-left: calc(var(--height) + 0.1rem);

					transition: 300ms;

					gap: 1rem;
					display: flex;
					flex-direction: column;
					flex-wrap: nowrap;
					flex-grow: 1;
					align-items: flex-start;
					justify-content: flex-start;
				}
			}
			.NavBar-bar-badgeCollapse {
				grid-template-columns: 0 1fr calc(var(--height));
				padding-left: 1.5rem;
				.NavBar-logo {
					width: 0;
				}
			}

			.NavBar-bar-isExpand {
				height: 100dvh;
				background: hsla(0, 0%, 100%, 0.5);
				box-shadow: none;

				.NavBar-items {
					opacity: 1;
				}
			}

			.NavBar-bar-isCollapsed {
				.NavBar-items {
					opacity: 0;
					pointer-events: none;
				}
			}
		}
		.NavBar-isScrolledUp {
			.NavBar-bar {
				box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
			}
		}
	}

	// when big
	@media (min-width: 501px) {
		.NavBar {
			display: flex;
			flex-direction: column;
			align-items: center;

			.NavBar-bar {
				grid-template-columns: var(--height) 1fr;
				grid-template-rows: var(--height);
				grid-template-areas: 'logo items';

				position: sticky;
				min-height: var(--height);

				.NavBar-title {
					display: none;
				}

				.NavBar-toggle {
					display: none;
				}

				.NavBar-dropdown {
					display: none;
				}
			}
			.NavBar-bar-badgeCollapse {
				grid-template-columns: 0 1fr;
				padding-left: 1rem;
				.NavBar-logo {
					width: 0;
				}
			}
		}
		.NavBar-isScrolledUp {
			.NavBar-bar {
				width: var(--content-max-width);
				max-width: calc(100% - var(--margin) - var(--margin));
				margin: var(--margin);
				margin-bottom: 0;
				border-radius: 1rem;
				box-shadow: 0 0 1rem #78a2c0;
			}
		}
		.NavBar-isScrolledDown {
			.NavBar-bar {
				width: 100%;
				max-width: 100%;
				border-radius: 0;
			}
		}
	}

	@media (min-width: 901px) {
		.NavBar .NavBar-bar .NavBar-items {
			justify-content: center;
		}
	}
</style>
