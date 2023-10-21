<script lang="ts">
	import ICON_ARROW from '@/assets/icon/arrow_down_224071.svg';

	export let title: string = '';
	export let isExpand = false;
</script>

<div
	class="DropDownCard flex flex-col items-stretch justify-start rounded-xl"
	isExpand={`${isExpand}`}
>
	<button
		class="header w-full p-6 flex flex-row items-center justify-between gap-5 text-start"
		on:click={() => (isExpand = !isExpand)}
	>
		<h3 class="grow text-white text-lg font-bold">{title}</h3>
		<img class="w-6 h-6 p-1" src={ICON_ARROW} alt="Click to Toggle" />
	</button>

	<div class="content">
		<div class="content-body">
			<slot />
		</div>
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
			display: grid;
			transition: all 0.2s;

			.content-body {
				transition: all 0.2s;
				overflow: hidden;
				padding: 1.5rem;

				color: white;
				border-top: solid #fef08a;
			}
		}
	}

	.DropDownCard[isExpand='true'] {
		.content {
			grid-template-rows: 1fr;

			.content-body {
				opacity: 1;
				border-top-width: 4px;

				padding-top: 1.5rem;
				padding-bottom: 1.5rem;
			}
		}
	}
	.DropDownCard[isExpand='false'] {
		.header {
			img {
				transform: rotate(180deg);
			}
		}
		.content {
			grid-template-rows: 0fr;

			.content-body {
				opacity: 0;
				border-width: 0;
				border-top-width: 0;

				padding-top: 0;
				padding-bottom: 0;
			}
		}
	}
</style>
