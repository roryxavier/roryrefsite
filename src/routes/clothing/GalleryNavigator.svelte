<script lang="ts">
	export let length: number = 0;
	export let index: number = 0;
	export let onClickIndex: (i: number) => void;
</script>

<div class="flex flex-row space-x-2">
	{#each Array(length) as _, i}
		{#if i === index}
			<button>
				<div class="pl-2 pr-2">
					<div class="rounded-full bg-white w-7 h-4" />
				</div>
			</button>
		{:else}
			<button>
				<div class="rounded-full bg-white w-4 h-4 opacity-50" on:click={() => onClickIndex(i)} />
			</button>
			<!--			w-40 h-20-->
		{/if}
	{/each}
</div>
<!--<div class='flex content-center'>-->
<!--</div>-->
