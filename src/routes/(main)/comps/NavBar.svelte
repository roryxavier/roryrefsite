<svelte:options accessors />

<script lang="ts">
	import badge from '../../../assets/badge.webp';
	import globalVars from '../../../vars/GlobalVars';

	let furList = ['Rory Chris', 'Jimmy Fox'];

	export let isScrollUp = false;

	$: isScrollUp, onScroll();

	let Self: HTMLElement;

	const onScroll = () => {
		if (Self === undefined) return;

		const { style } = Self;

		if (isScrollUp) {
			style['top'] = 'var(--margin)';
			style['left'] = 'var(--margin)';
			style['width'] = 'calc(100% - var(--margin) - var(--margin))';
			style['max-width'] = 'var(--max-content-width)';
			style['border-radius'] = '1rem';
		} else {
			style['top'] = '0';
			style['left'] = '0';
			style['width'] = '100%';
			style['max-width'] = '100%';
			style['border-radius'] = '0';
		}
	};
</script>

<div class="fixed right-40 top-20 flex flex-col" />

<nav class="Navigation" id="AppPage-Navigation" bind:this={Self}>
	<div class="Navigation-body">
		<img alt="Page Logo" class="Navigation-logo rounded-full" src={badge} />
		<div class="Navigation-items">
			{#each globalVars.navigationsLinks as navigation}
				<button
					class="Navigation-item {navigation.isSelected
						? 'Navigation-item-isSelected'
						: 'Navigation-item-isDeselected'}"
					on:click={() => {
						navigation.isSelected = true;
						for (const nav of globalVars.navigationsLinks) {
							if (navigation !== nav) nav.isSelected = false;
						}
					}}>{navigation.title}</button
				>
			{/each}

			<div
				style="
        overflow: visible;
        padding-right: 12px;
        padding-left: 12px;
        display: flex;
        align-items: center;
        position: relative
      "
			>
				<button
					class=" Navigation-item Navigation-item-isDeselected"
					style="
            padding-right: 15px;
            padding-left: 15px;
          "
					>Sona
				</button>
				<div
					class="flex flex-col content-center fixed"
					style="
            width: max-content;
            background-color: white;
            padding: 0.5rem;
            position: fixed;
            margin-top: 7rem;
            margin-left: -2rem;
            border-radius: 0.2rem;
          "
				>
					{#each furList as fur}
						<i>{fur}</i>
					{/each}
				</div>
			</div>
		</div>
	</div>
</nav>

<style>
	.Navigation {
		position: sticky;
		--margin: 1rem;

		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;

		background: linear-gradient(90deg, #44b4fc, #4983e4);
		background: hsla(0, 0%, 100%, 0.3);

		-webkit-backdrop-filter: blur(1em);
		backdrop-filter: blur(1em);

		transition: all 0.3s;
		box-shadow: 0 0 1rem #44b4fc;

		top: 0;
		left: 0;
		width: 100%;
		max-width: 100%;
		border-radius: 0;
		overflow-y: visible;
	}

	.Navigation-body {
		width: 100%;
		overflow-y: visible;
		max-width: var(--max-content-width);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		flex-wrap: nowrap;
	}
	.Navigation-items {
		width: max-content;
		overflow-y: visible;
		overflow-x: auto;

		gap: 1rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: nowrap;

		padding: 1.5rem 2rem 1.5rem 0.5rem;

		--scrollbar-size: 0.3em;
		--scrollbar-thumb-radius: 1rem;
		--scrollbar-track-margin: 0.5rem;
		--scrollbar-thumb-color: hsla(0, 0%, 0%, 0.2);
		--scrollbar-thumb-color-hover: hsla(0, 0%, 0%, 0.3);
		--scrollbar-track-color: hsla(0, 0%, 0%, 0.05);
		--scrollbar-track-color-hover: hsla(0, 0%, 0%, 0.05);
		scrollbar-width: var(--scrollbar-size);
		scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color);
	}

	.Navigation-items::-webkit-scrollbar {
		height: var(--scrollbar-size);
		width: var(--scrollbar-size);
	}

	.Navigation-items::-webkit-scrollbar-thumb {
		border-radius: var(--scrollbar-thumb-radius);
		background-color: var(--scrollbar-thumb-color);
	}

	.Navigation-items::-webkit-scrollbar-thumb:hover {
		background-color: var(--scrollbar-thumb-color-hover);
	}

	.Navigation-items::-webkit-scrollbar-track {
		margin: var(--scrollbar-track-margin);
		background-color: var(--scrollbar-track-color);
	}

	.Navigation-items::-webkit-scrollbar-track:hover {
		background-color: var(--scrollbar-track-color-hover);
	}

	.Navigation-logo {
		height: 3rem;
		margin: 1rem 0.5rem 1rem 1rem;
		/*border-radius: 0.2rem;*/
	}

	.Navigation-item {
		color: #224071;
		transition: all 0.2s;
		font-size: 1rem;
		border: none;
		background: none;
		font-weight: 600;
		border-bottom: 0.2em solid transparent;
	}

	.Navigation-item-isSelected {
		border-bottom: 0.2em solid #224071;
		font-weight: 700;
	}

	.Navigation-item-isDeselected {
		cursor: pointer;
	}

	.Navigation-item-isDeselected:hover {
		transform: translateY(-0.2rem);
	}
</style>
