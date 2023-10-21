<script lang="ts">
	import { Fursona } from './Fursona';
	import FursonaCard from './FursonaCard.svelte';

	const fursonas: Fursona[] = Fursona.list;
</script>

<div class="page-about">
	<div class="fursonas">
		{#each fursonas as fursona}
			<FursonaCard {fursona} />
		{/each}
	</div>
</div>

<style scoped lang="scss">
	.page-about {
		width: 100%;
		max-width: var(--content-max-width);

		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
	}
	.fursonas {
		gap: 0.5rem;
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: stretch;

		@media (min-width: 300px) {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
		}
	}
</style>
