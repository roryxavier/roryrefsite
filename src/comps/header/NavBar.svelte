<svelte:options accessors />

<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Fusonas from '../../vars/Fursonas';
	import badge from '../../assets/badge.webp';
	import globalVars from '../../vars/GlobalVars';
	import NavBarButton from './NavBar-Button.svelte';
	import NavBarDropDown from './NavBar-DropDown.svelte';

	export let isScrollDown = false;

	const { navigationsLinks } = globalVars;

	const furList = Fusonas;

	let pathname = '';
	onMount(() => {
		pathname = window.location.pathname;
	});
</script>

<nav class="NavBar {isScrollDown ? 'NavBar-isScrolledUp' : 'NavBar-isScrolledDown'}">
	<div class="NavBar-body">
		<img class="NavBar-logo" src={badge} alt="Page Logo" />
		<div class="NavBar-items">
			{#each navigationsLinks as navigation}
				<NavBarButton
					isSelected={navigation.path === pathname}
					title={navigation.title}
					href={navigation.path}
				/>
			{/each}

			<NavBarDropDown menus={furList} />
		</div>
	</div>
</nav>

<style lang="scss">
	.NavBar {
		position: sticky;
		top: 0;
		left: 0;

		width: 100%;
		max-width: 100%;
		overflow-y: visible;
		--margin: 1rem;

		border-radius: 0;
		background: hsla(0, 0%, 100%, 0.3);
		-webkit-backdrop-filter: blur(1em);
		backdrop-filter: blur(1em);
		transition: all 0.3s;
		box-shadow: 0 0 1rem #44b4fc;

		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;

		.NavBar-body {
			width: 100%;
			overflow-y: visible;
			max-width: var(--max-content-width);
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			flex-wrap: nowrap;

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
</style>
