<script lang="ts">
	import ArrowButton from './ArrowButton.svelte';
	import SectionTitle from '@/comps/common/SectionTitle.svelte';
	import ResponsiveContainer from '@/comps/common/ResponsiveContainer.svelte';
	import ImageCard from './ImageCard.svelte';
	import GalleryNavigator from './GalleryNavigator.svelte';

	const galleries: string[] = [];
	let galleryIndex = 0;
</script>

<main>
	<ResponsiveContainer>
		<div class="clothing-page">
			<SectionTitle title="Clothing Styles" id_tag="cloth_style" />

			{#if galleries.length}
				<div class="viewer">
					<ArrowButton
						direction="left"
						onClick={() => {
							galleryIndex = galleryIndex - 1;
							galleryIndex = galleryIndex < 0 ? 0 : galleryIndex;
						}}
					/>
					<ImageCard
						title="Rory Xavier"
						subtitle="Riding broom"
						imageSrc={galleries[galleryIndex]}
					/>
					<ArrowButton
						direction="right"
						onClick={() => {
							galleryIndex = galleryIndex + 1;
							galleryIndex =
								galleryIndex > galleries.length - 1 ? galleries.length - 1 : galleryIndex;
						}}
					/>
				</div>
			{/if}
			{#if galleries.length === 0}
				<span>Nothing here</span>
			{/if}

			<div class="h-5" />

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
