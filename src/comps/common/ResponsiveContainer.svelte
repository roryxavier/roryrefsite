<div class="section">
	<div class="h-10" />
	<slot />
	<div class="h-5" />
</div>

<style>
	.section {
		--pad-width: 1rem;
		margin: auto;
		padding: 0 var(--pad-width) 0 var(--pad-width);
		max-width: var(--max-content-width);
	}
</style>
