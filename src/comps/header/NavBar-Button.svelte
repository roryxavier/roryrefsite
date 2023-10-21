<svelte:options accessors />

<script lang="ts">
	export let isSelected = false;
	export let title = '';
	export let href = '';
	export let target = '';
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
		<div class="NavBarButton-highlight" />
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
		<div class="NavBarButton-highlight" />
	</button>
{/if}

<style scoped lang="scss">
	.NavBarButton {
		min-width: max-content;
		color: #224071;
		transition: all 0.2s;
		font-size: 1rem;
		border: none;
		background: none;
		font-weight: 600;
		border-bottom: 0.2em solid transparent;

		position: relative;

		.NavBarButton-highlight {
			--width: 100%;

			position: absolute;
			bottom: -0.2em;
			left: calc(calc(100% - var(--width)) / 2);
			right: 0;

			height: 0.2em;
			width: var(--width);

			display: flex;
			background: #224071;
			border-radius: 0.5em;

			transition: inherit;

			opacity: 0.9;
		}
	}
	.NavBarButton-isSelected {
		font-weight: 700;
		.NavBarButton-highlight {
			opacity: 1;
		}
	}
	.NavBarButton-isDeselected {
		cursor: pointer;
		.NavBarButton-highlight {
			opacity: 0;
		}
		&:hover {
			transform: translateY(-0.2rem);
			.NavBarButton-highlight {
				transform: translateY(0.2rem);
			}
		}
	}
</style>
