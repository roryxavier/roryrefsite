<script lang="ts">
	import ArrowButton from './ArrowButton.svelte';
	import SectionTitle from '@/comps/common/SectionTitle.svelte';
	import ResponsiveContainer from '@/comps/common/ResponsiveContainer.svelte';
	import ImageCard from './ImageCard.svelte';
	import GalleryNavigator from './GalleryNavigator.svelte';

	const galleries: string[] = [
		'https://pbs.twimg.com/media/FzH5yEOaMAATs0W?format=jpg&name=small',
		'https://pbs.twimg.com/media/Fxl6muQaUAA3EJR?format=jpg&name=small',
		'https://pbs.twimg.com/media/FWqriLcUUAEmz9a?format=jpg&name=small',
	];
	let galleryIndex = 0;
</script>

<main>
	<ResponsiveContainer>
		<div class="clothing-page">
			<div class="viewer">
				<ArrowButton
					direction="left"
					onClick={() => {
						galleryIndex = galleryIndex - 1;
						galleryIndex = galleryIndex < 0 ? 0 : galleryIndex;
					}}
				/>
				<ImageCard title="Rory Xavier" subtitle="Riding broom" imageSrc={galleries[galleryIndex]} />
				<ArrowButton
					direction="right"
					onClick={() => {
						galleryIndex = galleryIndex + 1;
						galleryIndex =
							galleryIndex > galleries.length - 1 ? galleries.length - 1 : galleryIndex;
					}}
				/>
			</div>

			<GalleryNavigator
				length={galleries.length}
				index={galleryIndex}
				onClickIndex={(index) => {
					galleryIndex = index;
				}}
			/>
		</div>
	</ResponsiveContainer>
</main>

<style scoped lang="scss">
	.clothing-page {
		width: 100%;
		max-width: var(--content-max-width);
		gap: 0.8em;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.viewer {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;
		}
	}
</style>
