<script lang="ts">
	import ResponsiveContainer from '@/comps/common/ResponsiveContainer.svelte';
	import ImageCard from './components/image-card.svelte';
	import { GalleryModel } from '@/model/Gallery';

	const galleries: GalleryModel[] = [
		new GalleryModel('https://pbs.twimg.com/media/FzH5yEOaMAATs0W?format=jpg&name=small', {
			subtitle: 'Cuddling boyfriend',
		}),
		new GalleryModel('https://pbs.twimg.com/media/Fxl6muQaUAA3EJR?format=jpg&name=small', {
			title: 'Rory Xavier',
			subtitle: 'Pride!!',
		}),
		new GalleryModel('https://pbs.twimg.com/media/FWqriLcUUAEmz9a?format=jpg&name=small', {
			title: 'Rory Xavier',
			subtitle: "Who's this pokemon?",
		}),
		new GalleryModel('https://pbs.twimg.com/media/FWqqN_NVQAECp33?format=jpg&name=small', {
			title: 'Rory Xavier',
			subtitle: 'Why are you looking at me like that?',
		}),
	];
</script>

<main>
	<ResponsiveContainer>
		<div class="clothing-page">
			<div class="clothing-content">
				{#each galleries as gallery}
					<ImageCard {gallery} />
				{/each}
			</div>
		</div>
	</ResponsiveContainer>
</main>

<style scoped lang="scss">
	.clothing-page {
		width: 100%;
		max-width: var(--content-max-width);

		.clothing-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.8em;

			@media (min-width: 550px) {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
			}
			& > * {
				width: 100%;
			}
		}
	}
</style>
