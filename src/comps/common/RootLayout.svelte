<script lang="ts">
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';
	import NavBar from '@/comps/header/NavBar.svelte';
	import Footer from '@/comps/footer/Footer.svelte';
	import Badge from './Badge.svelte';
	import { list as navigationsLinks } from '@/model/RouteInfo';

	$: if ($navigating) onRouteChange();

	let navbar: typeof NavBar;
	let app: HTMLDivElement;
	let badge: typeof Badge;

	let backgroundShow = false;
	let appShow = false;
	let containerShow = false;
	let scrollTop = 0;
	let isBadgeCollapse = false;
	let isNavExpand = false;

	// event
	const onRouteChange = () => {
		containerShow = false;

		setTimeout(() => {
			containerShow = true;
			invalidateBadge();
		}, 200);
	};
	const onScroll = () => {
		scrollTop = app.scrollTop;

		invalidateBadge();
	};
	const onNavigationSelect = () => {
		app.scrollTop = 0;
	};
	const onNavigationExpand = (expand: boolean) => {
		isNavExpand = expand;
		invalidateBadge();
	};

	// invalidate
	const invalidateBadge = () => {
		if (isNavExpand) {
			isBadgeCollapse = true;
			return;
		}

		const pathname = window.location.pathname;
		const item = navigationsLinks.find((navigationsLink) => navigationsLink.path === pathname);
		if (item) {
			if (item.path === '/') {
				isBadgeCollapse = scrollTop > 4;
			} else {
				isBadgeCollapse = true;
			}
		}
	};

	// on
	onMount(() => {
		backgroundShow = true;
		appShow = true;
		onRouteChange();
		window.addEventListener('popstate', () => onRouteChange());
	});
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet" />
</svelte:head>

<div class="background background-{backgroundShow}" style="z-index: 1" />
<div
	class="AppPage-body AppPage-body-{appShow}"
	style="z-index: 2;"
	bind:this={app}
	on:scroll={onScroll}
>
	<NavBar onItemSelected={onNavigationSelect} onExpand={onNavigationExpand} {isBadgeCollapse} />
	<Badge isCollapse={isBadgeCollapse} />
	<div class="AppPage-body-container AppPage-body-container-{containerShow}" style="z-index: 2">
		<slot />
	</div>
	<Footer />
</div>

<style lang="scss">
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
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

	.background {
		position: absolute;
		top: 0;
		left: 0;
		height: calc(100dvh);
		width: 100vw;
		background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);

		transition: opacity 1000ms ease;
		opacity: 0;
	}
	.background-true {
		opacity: 1;
	}

	// global variable
	.AppPage-body {
		--navbar-height: 5rem;
		--footer-height: 5rem;
		--content-max-width: 48rem;
		--badge-width: 10rem;
		--badge-height: 10rem;
	}
	.AppPage-body {
		font-family: Dosis, sans-serif;
		position: relative;

		background-attachment: fixed;
		background-size: cover;

		display: flex;
		flex-direction: column;
		align-items: center;

		height: 100dvh;
		min-height: 100dvh;
		max-height: 100dvh;
		width: 100%;

		position: relative;
		transition: all 400ms ease;
		opacity: 0;

		overflow-y: auto;

		.AppPage-body-container {
			width: 100%;

			display: flex;
			flex-direction: column;
			align-items: center;

			z-index: 1;
			flex-grow: 1;
			transition: all 200ms ease;
			transform: translateY(-0.5rem);
		}
		.AppPage-body-container-true {
			transform: translateY(0);
		}
	}
	.AppPage-body-true {
		opacity: 1;
	}
</style>
