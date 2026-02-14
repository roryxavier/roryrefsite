<script lang="ts">
	export let length: number = 0;
	export let index: number = 0;
	export let onClickIndex: (i: number) => void;
</script>

<div class="indexes">
	{#each new Array(length) as x, i}
		<button
			class="index"
			style={i === index ? 'width: 2rem; background: white' : ''}
			on:click={() => onClickIndex(i)}
		/>
	{/each}
</div>

<style scoped lang="scss">
	.indexes {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;

		& > * {
			min-width: 1rem;
			min-height: 1rem;
			display: flex;
			background: rgba(255, 255, 255, 0.5);
			border-radius: 1rem;
		}
	}
</style>
