<svelte:options accessors />

<script>
	export let onClick = () => {};

	export let iconSfw = '😇';
	export let iconNsfw = '😈';
	export let title = 'Toggle';
</script>

<div class="Reference-dirty-option">
	{iconSfw}
	<button on:click={() => onClick()}>{title}</button>
	{iconNsfw}
</div>

<style lang="scss">
	.Reference-dirty-option {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 1rem;
	}
</style>
