<svelte:options accessors />

<script>
	export let title = '';
	export let onClick = () => {};
</script>

<div class="ReferenceButton">
	<div class="ReferenceButton-shadow" />
	<button class="ReferenceButton-button" on:click={() => onClick()}>{title}</button>
</div>

<style lang="scss">
	.ReferenceButton {
		width: 100%;
		position: relative;
		display: flex;

		.ReferenceButton-shadow {
			z-index: 1;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			border-radius: 0.5em;
			transform: translateY(0.5rem);

			background-color: #162338;
		}
		.ReferenceButton-button {
			z-index: 2;
			width: 100%;
			background-color: #224071;
			color: white;
			padding: 1.5rem;
			transition: all 0.2s;
			border-radius: 0.5em;
			&:hover {
				transform: translateY(-0.2rem);
			}
		}
	}
</style>
