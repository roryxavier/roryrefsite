<div class="section">
	<div class="h-10" />
	<slot />
	<div class="h-5" />
</div>

<style>
	.section {
		width: 100%;
		max-width: var(--content-max-width);
		--pad-width: 1rem;
		margin: auto;
		padding: 0 var(--pad-width) 0 var(--pad-width);
		display: flex;
		flex-direction: column;
	}
</style>
