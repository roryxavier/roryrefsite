<script lang="ts">
	export let title: string = '';
	export let subtitle: string = '';
	export let imageSrc: string = '';
</script>

<div class="image-card">
	<img src={imageSrc} alt="alt" />

	<div>
		<span>{subtitle}</span>
		<span>{title}</span>
	</div>
</div>

<style lang="scss">
	.image-card {
		border-radius: 0.5rem;
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
		color: white;

		display: flex;
		flex-direction: column;
		align-items: center;

		overflow: hidden;

		background: rgba(255, 255, 255, 0.5);

		position: relative;

		& > div {
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 8rem;

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
