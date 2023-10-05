<script lang="ts">
	import NavBar from '../header/NavBar.svelte';
	import Footer from '../footer/Footer.svelte';
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';

	$: if ($navigating) onRouteChange();

	let navbar: typeof NavBar;
	let app: HTMLDivElement;

	let backgroundShow = false;
	let appShow = false;
	let containerShow = false;

	const onRouteChange = () => {
		containerShow = false;

		setTimeout(() => {
			containerShow = true;
		}, 200);
	};

	onMount(() => {
		backgroundShow = true;
		appShow = true;
		containerShow = true;
	});
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet" />
</svelte:head>

<div class="background background-{backgroundShow}" />

<div
	class="AppPage AppPage-{appShow}"
	bind:this={app}
	on:scroll={(e) => (navbar.isScrollDown = e.target.scrollTop > 4)}
>
	<NavBar bind:this={navbar} onItemSelected={() => (app.scrollTop = 0)} />

	<div class="AppPage-container AppPage-container-{containerShow}">
		<slot />
	</div>

	<Footer />
</div>

<style lang="scss">
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	.background {
		position: fixed;
		top: 0;
		left: 0;
		height: calc(100dvh + 10rem);
		width: 100vw;
		background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);

		transition: all 1000ms ease;
		opacity: 0;
	}
	.background-true {
		opacity: 1;
	}

	:root {
		@media (max-width: 700px) {
			font-size: 19px;
		}
		@media (max-width: 600px) {
			font-size: 18px;
		}
		@media (max-width: 500px) {
			font-size: 17px;
		}
		@media (max-width: 400px) {
			font-size: 16px;
		}
		@media (max-width: 300px) {
			font-size: 15px;
		}
		@media (max-width: 200px) {
			font-size: 14px;
		}
		font-size: 20px;
		@media (min-width: 1000px) {
			font-size: 21px;
		}
		@media (min-width: 1200px) {
			font-size: 22px;
		}
	}
	body {
		position: relative;
		max-width: 30rem;
	}

	.AppPage {
		font-family: Dosis, sans-serif;

		background-attachment: fixed;
		background-size: cover;

		--max-content-width: 48rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		min-height: calc(100dvh + 10rem);
		height: max-content;
		width: 100%;
		position: relative;
		transition: all 400ms ease;
		opacity: 0;

		.AppPage-container {
			z-index: 1;
			flex-grow: 1;
			transition: all 200ms ease;
			transform: translateY(-0.5rem);
		}
		.AppPage-container-true {
			transform: translateY(0);
		}
	}
	.AppPage-true {
		opacity: 1;
	}
</style>
