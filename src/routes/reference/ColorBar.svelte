<script lang="ts">
	export let hexColor = 'black';

	let text = 'Copy';

	const copy = () => {
		const textarea = document.createElement('textarea');
		textarea.value = hexColor;
		textarea.setAttribute('readonly', '');
		textarea.style = { position: 'absolute', left: '-9999px' };
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand('copy');
		textarea.remove();

		setTimeout(() => (text = 'Copied'), 100);
	};
	const reset = () => {
		text = 'Copy';
	};
</script>

<button
	class="ColorBar"
	on:click={() => copy()}
	on:mouseover={() => reset()}
	on:focus={() => reset()}
>
	<div class="ColorBar-bar rounded" style="background-color: {hexColor};" />
	<span class="ColorBar-hex">{hexColor.toUpperCase()}</span>
	<span class="ColorBar-text">{text}</span>
</button>

<style lang="scss">
	.ColorBar {
		height: 2.6rem;
		width: 8rem;
		position: relative;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 1em;
		cursor: pointer;
		padding: 0.1rem;
		transition: padding 100ms linear;

		&:hover,
		&:focus {
			padding: 0;
			.ColorBar-text {
				opacity: 1;
			}
			.ColorBar-hex {
				opacity: 0;
			}
		}
		.ColorBar-bar {
			width: 100%;
			height: 100%;
			pointer-events: none;
		}
		.ColorBar-text {
			transition: opacity 100ms linear;
			pointer-events: none;
			opacity: 0;
			position: absolute;
			background: white;
			border: 1px solid rgba(0, 0, 0, 0.1);
			border-radius: 0.4em;
			font-size: 0.7em;
			font-weight: 600;
			padding: 0.1em 0.5em;
		}
		.ColorBar-hex {
			width: 4.8em;
			transition: opacity 100ms linear;
			pointer-events: none;
			position: absolute;
			background: rgba(255, 255, 255, 0.8);
			border: 1px solid rgba(0, 0, 0, 0.05);
			border-radius: 0.4em;
			font-size: 0.8em;
			font-weight: 600;
			padding: 0.1em 0.5em;
		}
	}
</style>
