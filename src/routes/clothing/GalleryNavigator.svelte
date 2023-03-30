<script>
	export let counter = 0;

	export let current_index = 0;
</script>

<div class="flex flex-row space-x-2">
	{#each Array(counter) as _, i}
		{#if i === current_index}
			<button>
				<div class="pl-2 pr-2">
					<div class="rounded-full bg-white w-7 h-4" />
				</div>
			</button>
		{:else}
			<button>
				<div class="rounded-full bg-white w-4 h-4 opacity-50" />
			</button>
			<!--			w-40 h-20-->
		{/if}
	{/each}
</div>
<!--<div class='flex content-center'>-->
<!--</div>-->
