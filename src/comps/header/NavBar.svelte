<svelte:options accessors />

<script lang="ts">
	import { onMount } from 'svelte';
	import Fusonas from '../../vars/Fursonas';
	import badge from '../../assets/badge.webp';
	import ICON_ARROW from '../../assets/arrow_224071.svg';
	import globalVars from '../../vars/GlobalVars';
	import NavBarButton from './NavBar-Button.svelte';
	import NavBarDropDown from './NavBar-DropDown.svelte';
	export let isScrollDown = false;

	// contants
	const { navigationsLinks } = globalVars;
	const furList = Fusonas;

	// variables
	let pathname = '';
	let isExpand = false;

	// lifecycles
	onMount(() => {
		pathname = window.location.pathname;
	});
</script>

<div class="NavBar-box" />
<nav
	class="NavBar {isScrollDown ? 'NavBar-isScrolledUp' : 'NavBar-isScrolledDown'} {isExpand
		? 'NavBar-isExpand'
		: ''}"
>
	<div class="NavBar-bar">
		<a href="/"><img class="NavBar-logo" src={badge} alt="Page Logo" /></a>

		<span class="NavBar-title"
			>{navigationsLinks.reduce(
				(title, navLink) => (navLink.path === pathname ? navLink.title : title),
				''
			)}</span
		>

		<div class="NavBar-items">
			{#each navigationsLinks as navigation}
				<NavBarButton
					isSelected={navigation.path === pathname}
					title={navigation.title}
					href={navigation.path}
				/>
			{/each}

			<!--			<NavBarDropDown menus={furList} />-->
		</div>

		<button
			class="NavBar-toggle"
			style={isExpand ? 'transform: rotate(180deg)' : ''}
			on:click={() => (isExpand = !isExpand)}
		>
			<img class="NavBar-toggle-icon" src={ICON_ARROW} alt="Click to Expand" />
		</button>
	</div>

	<div class="NavBar-dropdown">
		{#each navigationsLinks as navigation}
			<NavBarButton
				isSelected={navigation.path === pathname}
				title={navigation.title}
				href={navigation.path}
			/>
		{/each}
		<NavBarDropDown menus={furList} />
	</div>
</nav>

<style lang="scss">
	.NavBar-box {
		--height: 5rem;
		min-height: var(--height);
	}
	.NavBar {
		--height: 5rem;
		--margin: 1rem;

		z-index: 2;
		height: var(--height);

		--blur: 1em;
		-webkit-backdrop-filter: blur(var(--blur));
		backdrop-filter: blur(var(--blur));
		overflow: hidden;

		background: hsla(0, 0%, 100%, 0.3);
		transition: all 0.3s;
		box-shadow: 0 0 1rem #44b4fc;

		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: flex-start;

		.NavBar-bar {
			z-index: 2;
			width: 100%;
			max-width: var(--max-content-width);

			overflow-y: visible;

			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			justify-content: space-between;

			.NavBar-title {
				flex-grow: 1;
				color: #224071;
				font-size: 1.5rem;
				font-weight: 900;
				margin: 0 1rem;
			}
			.NavBar-logo {
				height: 3rem;
				margin: 1rem 0.5rem 1rem 1rem;
				border-radius: 50%;
			}
			.NavBar-items {
				width: max-content;
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
				--size: 4rem;
				width: var(--size);
				height: var(--size);
				margin: 0 1rem;
				transition: 300ms;

				&:hover {
					transform: scale(1.1);
				}
				&:focus {
					transform: scale(0.8);
				}

				.NavBar-toggle-icon {
					width: var(--size);
					height: var(--size);
					padding: 1.4rem;
				}
			}
		}
		.NavBar-dropdown {
			z-index: 1;
			position: fixed;
			top: 0;
			left: 0;

			width: 100vw;
			max-width: 100vw;
			padding-top: calc(var(--height) + 0.6rem);
			padding-left: calc(var(--height) + 0.6rem);

			transition: 300ms;
			opacity: 0;
			pointer-events: none;

			gap: 1rem;
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			flex-grow: 1;
			align-items: flex-start;
			justify-content: flex-start;
		}
	}

	// when small
	@media (max-width: 700px) {
		.NavBar {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			max-width: 100%;
			border-radius: 0;
			.NavBar-bar {
				.NavBar-items {
					display: none;
				}
			}
		}
	}
	// when big
	@media (min-width: 701px) {
		.NavBar-box {
			display: none;
		}
		.NavBar {
			position: sticky;
			min-height: var(--height);
			.NavBar-bar {
				.NavBar-title {
					display: none;
				}
				.NavBar-toggle {
					display: none;
				}
			}
			.NavBar-dropdown {
				display: none;
			}
		}
		.NavBar-isScrolledUp {
			top: var(--margin);
			left: var(--margin);
			width: calc(100% - var(--margin) - var(--margin));
			max-width: var(--max-content-width);
			border-radius: 1rem;
		}
		.NavBar-isScrolledDown {
			top: 0;
			left: 0;
			width: 100%;
			max-width: 100%;
			border-radius: 0;
		}
	}

	.NavBar-isExpand {
		position: absolute;
		height: 100vh;
		background: hsla(0, 0%, 100%, 0.5);

		.NavBar-dropdown {
			opacity: 1;
			pointer-events: initial;
		}
	}
</style>
