<script>
	import ICON_ARROW from '../../assets/arrow_224071.svg';

	export let title;
	export let isExpand = false;
</script>

<div
	class="DropDownCard flex flex-col items-stretch justify-start rounded-xl"
	isExpand={`${isExpand}`}
>
	<button
		class="header w-full p-4 flex flex-row items-center justify-between gap-5 text-start"
		on:click={() => (isExpand = !isExpand)}
	>
		<h3 class="grow text-white text-lg font-bold">{title}</h3>
		<img class="w-6 h-6 p-1" src={ICON_ARROW} alt="Click to Toggle" />
	</button>

	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.DropDownCard {
		background: linear-gradient(120deg, #0f4c9c, #6bc5fa);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
		overflow: hidden;

		.header {
			img {
				transition: all 0.2s;
			}
		}

		.content {
			color: white;
			padding: 20px;
			border-top: solid #fef08a;
			transition: all 0.2s;
		}
	}

	.DropDownCard[isExpand='true'] {
		.content {
			opacity: 1;
			pointer-events: initial;
			border-top-width: 4px;

			height: max-content;
			padding-top: 20px;
			padding-bottom: 20px;
		}
	}
	.DropDownCard[isExpand='false'] {
		.header {
			img {
				transform: rotate(180deg);
			}
		}
		.content {
			opacity: 0;
			pointer-events: none;
			border-width: 0;
			border-top-width: 0;

			height: 0;
			padding-top: 0;
			padding-bottom: 0;
		}
	}
</style>
