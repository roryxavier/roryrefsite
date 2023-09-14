<script lang="ts">
	import ICON_ARROW from '../../assets/arrow_224071.svg';

	export let direction: 'down' | 'up' | 'left' | 'right' = 'down';
	export let onClick: () => void;

	const classDirection = () => {
		if (direction === 'left') return 'rotate-90';
		if (direction === 'right') return '-rotate-90';
		if (direction === 'up') return 'rotate-180';

		return '';
	};
</script>

<button on:click={onClick}>
	<img class={classDirection()} src={ICON_ARROW} alt="Arrow Left" />
</button>

<style scoped lang="scss">
	button {
		--size: 3rem;
		width: var(--size);
		height: var(--size);
		min-width: var(--size);
		min-height: var(--size);
		max-width: var(--size);
		max-height: var(--size);

		padding: 0.5rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		cursor: pointer;
		transition: background-color 200ms ease;

		&:hover {
			background: rgba(0, 0, 0, 0.05);
		}
		& > img {
			--size: 1.5rem;
			width: var(--size);
			height: var(--size);
			min-width: var(--size);
			min-height: var(--size);
			max-width: var(--size);
			max-height: var(--size);
		}
	}
</style>
