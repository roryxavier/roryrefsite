<svelte:options accessors />

<script lang="ts">
	import { onMount } from 'svelte';
	import badge from '../../assets/badge.webp';
	import ICON_ARROW from '../../assets/arrow_224071.svg';
	import globalVars from '../../vars/GlobalVars';
	import NavBarItems from './NavBar-Items.svelte';
	export let isScrollDown = false;

	// contants
	const { navigationsLinks } = globalVars;

	// variables
	let pathname = '';
	let isExpand = false;
	let title = '';

	// lifecycles
	onMount(() => {
		pathname = window.location.pathname;
		title = navigationsLinks.reduce(
			(title, navLink) => (navLink.path === pathname ? navLink.title : title),
			''
		);
	});
</script>

<div class="NavBar {isScrollDown ? 'NavBar-isScrolledUp' : 'NavBar-isScrolledDown'}">
	<nav class="NavBar-bar {isExpand ? 'NavBar-bar-isExpand' : 'NavBar-bar-isCollapsed'}">
		<a class="NavBar-logo" href="/">
			<img class="NavBar-logo-icon" src={badge} alt="Page Logo" />
		</a>

		<span class="NavBar-title" on:click={() => (isExpand = !isExpand)}>{title}</span>

		<div class="NavBar-items">
			<NavBarItems
				onClickItem={(item) => {
					isExpand = false;
					title = item.title;
				}}
			/>
		</div>

		<button
			class="NavBar-toggle"
			style={isExpand ? 'transform: rotate(180deg)' : ''}
			on:click={() => (isExpand = !isExpand)}
		>
			<img class="NavBar-toggle-icon" src={ICON_ARROW} alt="Click to Expand" />
		</button>
	</nav>
</div>

<style lang="scss">
	.NavBar {
		--height: 5rem;
		height: var(--height);

		width: 100%;
		z-index: 2;
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
			box-shadow: 0 0 1rem #44b4fc;

			display: grid;

			.NavBar-logo {
				grid-area: logo;
			}
			.NavBar-title {
				grid-area: title;
			}
			.NavBar-items {
				grid-area: items;
			}
			.NavBar-toggle {
				grid-area: toggle;
			}

			.NavBar-logo {
				--size: var(--height);
				width: var(--size);
				height: var(--size);
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				.NavBar-logo-icon {
					--icon-size: calc(var(--size) - 2rem);
					width: var(--icon-size);
					height: var(--icon-size);
					border-radius: inherit;
				}
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
				justify-content: flex-end;
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
				--margin: 0.5rem;
				--size: calc(var(--height) - var(--margin) - var(--margin));
				width: var(--size);
				height: var(--size);
				margin: var(--margin);
				margin-left: 0;
				margin-right: calc(var(--margin) * 2);
				transition: 300ms;
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
					width: var(--size);
					height: var(--size);
					padding: 1.4rem;
					transition: 300ms;
				}
			}
		}
	}

	// when small
	@media (max-width: 700px) {
		.NavBar {
			.NavBar-bar {
				grid-template-columns: var(--height) 1fr calc(var(--height) - 1rem);
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
					// padding-top: calc(var(--height) + 0.6rem);
					padding-left: calc(var(--height));

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
			.NavBar-bar-isExpand {
				height: 100vh;
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
	}
	// when big
	@media (min-width: 701px) {
		.NavBar {
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
		}
		.NavBar-isScrolledUp {
			.NavBar-bar {
				margin: var(--margin);
				margin-bottom: 0;
				border-radius: 1rem;
			}
		}
		.NavBar-isScrolledDown {
			.NavBar-bar {
				border-radius: 0;
			}
		}
	}
</style>
