<script lang="ts">
	import type { Gallery } from './Gallery';

	export let gallery: Gallery;
</script>

<div class="image-card">
	<img src={gallery.image} alt={gallery.subtitle} />
	<div>
		<span>{gallery.subtitle}</span>
		<span>{gallery.title}</span>
	</div>
</div>

<style lang="scss">
	.image-card {
		flex-grow: 1 1;
		height: 100%;
		border-radius: 0.5rem;
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
		color: white;

		display: flex;
		flex-direction: column;
		align-items: center;

		overflow: hidden;

		background: rgba(255, 255, 255, 0.5);

		position: relative;
		aspect-ratio: 4/3;

		& > img {
			width: 100%;
			height: 100%;
			aspect-ratio: 4/3;
			object-fit: cover;
		}

		& > div {
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 8rem;
			max-height: 100%;

			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-end;
			padding: 1rem;
			background-image: linear-gradient(transparent, black);

			& > span {
				color: hsla(0, 0%, 100%, 0.8);
			}
			& > span:last-child {
				color: white;
				font-size: 1.6em;
				font-weight: 600;
			}
		}
	}
</style>
