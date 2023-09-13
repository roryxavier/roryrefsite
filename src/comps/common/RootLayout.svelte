<script>
	import NavBar from '../header/NavBar.svelte';
	import Footer from '../footer/Footer.svelte';

	let navbar;
	let app;
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet" />
</svelte:head>

<div
	class="AppPage"
	bind:this={app}
	on:scroll={(e) => (navbar.isScrollDown = e.target.scrollTop > 4)}
>
	<NavBar bind:this={navbar} onItemSelected={() => (app.scrollTop = 0)} />

	<div class="AppPage-container">
		<slot />
	</div>

	<Footer />
</div>

<style lang="scss">
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
	}
	.AppPage-container {
		z-index: 1;
		flex-grow: 1;
	}
</style>
