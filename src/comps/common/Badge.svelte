<script lang="ts">
	import BadgeImage from '../../assets/badge.webp';

	export let isCollapse: boolean = false;
</script>

<img alt="Rory Badge" src={BadgeImage} class="badge {isCollapse ? 'badge-collapse' : ''} md:w-60" />

<style scoped lang="scss">
	.badge {
		z-index: 4;

		width: var(--badge-width);
		height: var(--badge-height);
		aspect-ratio: 1/1;

		border-radius: 1.5rem;
		transition: all 400ms ease;

		position: fixed;
		left: calc(50% - calc(var(--badge-width) / 2));
		top: calc(var(--navbar-height) + 1.5rem);

		pointer-events: none;
	}
	.badge-collapse {
		--icon-size: calc(var(--navbar-height) - 2rem);

		top: calc(calc(var(--navbar-height) - var(--icon-size)) / 2);
		left: calc(calc(var(--navbar-height) - var(--icon-size)) / 2);

		width: var(--icon-size);
		height: var(--icon-size);

		border-radius: 50%;
	}
</style>
