<svelte:options accessors />

<script>
	export let title = '';
	export let icon = '';
	export let href = '';
	export let target = '_blank';
</script>

<a class="SocialButton" {href} {target} rel="noopener noreferrer">
	{#if typeof icon === 'string' && icon.trim().length}
		<img class="SocialButton-icon" src={icon} alt={`Icon ${title}`} />
	{/if}
	<span class="SocialButton-title">{title}</span></a
>

<style lang="scss">
	.SocialButton {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 0.4rem;
		transition: all 0.2s;
		border-radius: 0.3rem;

		&:hover {
			transform: translateY(-0.2rem);
		}

		.SocialButton-icon {
			width: 1em;
			height: 1em;
			object-fit: cover;
		}
		.SocialButton-title {
			flex-grow: 1;
			text-align: start;
		}
	}
</style>
