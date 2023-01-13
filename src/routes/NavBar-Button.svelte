<svelte:options accessors />

<script lang="ts">
	export let isSelected = false;
	export let title = '';
	export let href = '';
	export let target = '_self';
	export let onClick = () => {};
	export let onBlur = () => {};
	export let onFocus = () => {};
</script>

{#if href.length}
	<a
		class="NavBarButton {isSelected ? 'NavBarButton-isSelected' : 'NavBarButton-isDeselected'}"
		{href}
		{target}
		on:click={() => onClick()}
		on:blur={() => onBlur()}
		on:focus={() => onFocus()}
	>
		{title}
	</a>
{/if}

{#if !href.length}
	<button
		class="NavBarButton {isSelected ? 'NavBarButton-isSelected' : 'NavBarButton-isDeselected'}"
		on:click={() => onClick()}
		on:blur={() => onBlur()}
		on:focus={() => onFocus()}
	>
		{title}
	</button>
{/if}

<style lang="scss">
	.NavBarButton {
		color: #224071;
		transition: all 0.2s;
		font-size: 1rem;
		border: none;
		background: none;
		font-weight: 600;
		border-bottom: 0.2em solid transparent;
	}
	.NavBarButton-isSelected {
		border-bottom: 0.2em solid #224071;
		font-weight: 700;
	}
	.NavBarButton-isDeselected {
		cursor: pointer;
		&:hover {
			transform: translateY(-0.2rem);
		}
	}
</style>
