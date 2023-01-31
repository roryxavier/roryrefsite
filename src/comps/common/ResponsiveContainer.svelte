<div class="section">
	<div class="h-10" />
	<slot />
</div>

<style>
	.section {
		--pad-width: 1rem;
		margin: auto;
		padding: 0 var(--pad-width) 0 var(--pad-width);
		max-width: 45rem;
	}
</style>
