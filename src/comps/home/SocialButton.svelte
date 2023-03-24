<svelte:options accessors />

<script>
	export let title = '';
	export let icon = '';
	export let href = '';
	export let target = '_blank';
</script>

<a class="SocialButton w-full" {href} {target} rel="noopener noreferrer">
	{#if typeof icon === 'string' && icon.trim().length}
		<img class="w-4 h-4 object-cover" src={icon} alt={`Icon ${title}`} />
	{/if}
	<span class="grow text-start text-base font-bold leading-4">{title}</span></a
>

<style lang="scss">
	.SocialButton {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		transition: all 0.2s;
		background: hsla(0, 0%, 100%, 0.5);
		gap: 0.4rem;
		padding: 0.8rem;
		padding: 0.8rem 1.2rem;
		border-radius: 0.8rem;

		&:hover {
			transform: translateY(-1px);
			background: hsla(0, 0%, 100%, 0.6);
		}
	}
</style>
