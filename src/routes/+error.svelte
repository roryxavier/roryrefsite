<script lang="ts">
	import { page } from '$app/stores';
	import RootLayout from '@/comps/common/RootLayout.svelte';

	const status = $page.status;
	const message = $page.error.message;
</script>

<main>
	<div class="grid h-96 content-center">
		<div class="grid grid-rows-1">
			<div class="text-6xl">OOPS!</div>
			<div>There was an error trying to load the page!</div>
			<div>
				Status code: <strong>{status}</strong>
			</div>
			<div class="text-xs">{message}</div>
		</div>
	</div>
</main>
