<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { Fursona } from './Fursona';

	let showCount = 0;
	let currentIndex = 0;

	const fursonas: Fursona[] = [];

	onMount(() => {
		if (!window) return;
		window.addEventListener('resize', onResize);
		onResize();

		onDestroy(() => {
			if (!window) return;
			window.removeEventListener('resize', onResize);
		});
	});

	const onResize = () => {
		if (!document) return;
		const card = document.querySelector('.ocs') as HTMLDivElement | undefined;
		if (!card) return;
		showCount = Math.floor(card.offsetWidth / 150);
	};
	const onScrollGallery = (e: Event) => {
		const target = e.target as HTMLDivElement;

		const imgGalleryNodes = target.querySelectorAll('.gallery');
		const imgGalleries = [];
		for (const imgGallery of imgGalleryNodes) {
			imgGalleries.push(imgGallery);
		}
		for (const imgGallery of imgGalleries) {
			const rect = imgGallery.getBoundingClientRect();
			if (rect.left > 0) {
				currentIndex = imgGalleries.indexOf(imgGallery);
				break;
			}
		}
	};
	const onClickIndex = (index: number) => {
		const galleryScroll = document.querySelector('.ocs-scroll') as HTMLDivElement;
		galleryScroll.scrollTo({ left: (galleryScroll.offsetWidth / showCount) * index });
	};
</script>

<div class="page-about">
	<div class="ocs">
		<div class="ocs-content">
			<span class="ocs-title">My OCs!</span>
			<p>These are all of my characters! More on the way</p>
			<p>Swipe or Scroll to navigate, /click for more info!</p>
		</div>

		{#if fursonas.length > 0 && showCount > 0}
			<div class="ocs-gallery" style={`&#45;&#45;show-count: ${showCount}`}>
				<div class="ocs-scroll" on:scroll={onScrollGallery}>
					{#each fursonas as fursona}
						<img class="gallery" src={fursona.image} alt="Gallery Image" />
					{/each}
				</div>

				<div class="ocs-indexes">
					{#if fursonas.length - 1 >= showCount}
						{#each new Array(fursonas.length - showCount + 1) as x, index}
							<button
								class={`ocs-index-${index}`}
								style={`background: ${currentIndex === index ? 'white' : '#00000066'}`}
								on:click={() => onClickIndex(index)}
							/>
						{/each}
					{/if}
				</div>
			</div>
		{/if}
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
	.ocs {
		width: 100%;
		max-width: 30rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		background: linear-gradient(-30deg, rgb(1, 50, 126), rgb(53, 174, 255)) center center / cover;
		border-radius: 0.5rem;
		color: white;

		padding: 2rem;

		.ocs-content {
			display: flex;
			flex-direction: column;
			align-items: center;

			.ocs-title {
				font-weight: 600;
				font-size: 2rem;
			}
		}
		.ocs-gallery {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.8rem;
			.ocs-scroll {
				max-width: max-content;
				--gap: 0.5rem;

				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-start;

				overflow-x: auto;
				margin-top: 0;
				gap: var(--gap);
				border-radius: 0.8rem;

				&::-webkit-scrollbar {
					width: 0;
					height: 0;
				}
				scrollbar-width: none; /* Firefox */

				scroll-snap-type: x mandatory;
				scroll-behavior: smooth;
				& > img {
					width: 2rem;
					height: 2rem;
					scroll-snap-align: start;

					--width: calc(calc(100% - var(--gap) * calc(var(--show-count) - 1)) / var(--show-count));
					min-width: var(--width);
					max-width: var(--width);
					aspect-ratio: 1/1;
					border-radius: 0.8rem;
				}
			}
			.ocs-indexes {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				gap: 0.8rem;

				& > * {
					--size: 10px;
					width: var(--size);
					height: var(--size);
					min-width: var(--size);
					min-height: var(--size);
					max-width: var(--size);
					max-height: var(--size);

					background: #00000066;
					border-radius: 50%;
					display: flex;

					transition: background-color 200ms ease;
				}
			}
		}
	}
</style>
