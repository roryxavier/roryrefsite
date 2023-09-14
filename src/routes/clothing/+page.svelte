<script lang="ts">
	import ImageAsset1 from '../../assets/clothing/20230227-2110.png';
	import ImageAsset2 from '../../assets/clothing/Abrazaditos RORY x JIMMY.png';
	import ImageAsset3 from '../../assets/clothing/favicon-0.png';
	import ImageAsset4 from '../../assets/clothing/IMG_20230214_232454_384.jpg';
	import ImageAsset5 from '../../assets/clothing/JiRo.png';
	import ImageAsset6 from '../../assets/clothing/kanotsu_moon-FullBody+Shaded+1Char+Bg(24-07-2021).png';
	import ImageAsset7 from '../../assets/clothing/kanotsu_moon-HalfBody+SPStyle+1Char+Backdrop(30-06-2022).png';
	import ImageAsset8 from '../../assets/clothing/Misque-FullBody-FullColour+1Char+ComplexBG(18-03-2022).jpg';
	import ImageAsset9 from '../../assets/clothing/photo_2023-01-08_17-17-14.jpg';
	import ImageAsset10 from '../../assets/clothing/photo_2023-01-23_13-01-31.jpg';
	import ImageAsset11 from '../../assets/clothing/Rory YCH.png';
	import ImageAsset12 from '../../assets/clothing/Tachi-FullBodyChibiSTyle+1Char(25-04-2023).png';

	import ArrowButton from './ArrowButton.svelte';
	import SectionTitle from '../../comps/common/SectionTitle.svelte';
	import ResponsiveContainer from '../../comps/common/ResponsiveContainer.svelte';
	import ImageCard from './ImageCard.svelte';
	import GalleryNavigator from './GalleryNavigator.svelte';

	let galleries = [
		ImageAsset1,
		ImageAsset2,
		ImageAsset3,
		ImageAsset4,
		ImageAsset5,
		ImageAsset6,
		ImageAsset7,
		ImageAsset8,
		ImageAsset9,
		ImageAsset10,
		ImageAsset11,
		ImageAsset12
	];
	let galleryIndex = 0;
</script>

<main>
	<!-- <UnderConstruction /> -->
	<ResponsiveContainer>
		<div class="clothing-page">
			<SectionTitle title="Clothing Styles" id_tag="cloth_style" />

			<div class="flex flex-row space-x-3 items-center">
				<ArrowButton
					direction="left"
					onClick={() => {
						galleryIndex = galleryIndex - 1;
						galleryIndex = galleryIndex < 0 ? 0 : galleryIndex;
					}}
				/>
				<!-- <ImageCard
						title="Rory Xavier"
						subtitle="Riding broom"
						imageSrc="https://pbs.twimg.com/media/FqoTEC2akAAmXPz?format=jpg&name=4096x4096"
					/> -->
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

<style lang="scss">
	.clothing-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
