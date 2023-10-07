<script lang="ts">
	import type { Fursona } from './Fursona';

	export let fursona: Fursona;
</script>

<div class="fursona-card">
	<img
		class="fursona-background fursona-absolute"
		src={fursona.image}
		alt={`${fursona.name} image`}
	/>
	<div class="fursona-foreground fursona-absolute" />
	<div class="fursona-content">
		<span class="fursona-species">{fursona.species}</span>
		<span class="fursona-name">{fursona.name}</span>
	</div>
</div>

<style scoped lang="scss">
	.fursona-card {
		position: relative;

		overflow: hidden;

		aspect-ratio: 4/3;
		border-radius: 1rem;

		.fursona-absolute {
			width: 100%;
			height: 100%;

			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			display: flex;

			pointer-events: none;
		}
		.fursona-background {
			z-index: 1;
			object-fit: cover;
		}
		.fursona-foreground {
			z-index: 2;
			background-image: linear-gradient(0, black, hsla(0, 0%, 0%, 0.6));
		}
		.fursona-content {
			z-index: 3;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;

			width: 100%;
			height: 100%;
			padding: 1.2rem;

			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-end;

      font-size: 1.2rem;

			.fursona-name {
				color: white;
				line-height: 1;
				font-size: 1.1em;
			}
			.fursona-species {
				color: rgba(255, 255, 255, 0.6);
				font-size: 0.8em;
				line-height: 1;
			}
		}
	}
</style>
