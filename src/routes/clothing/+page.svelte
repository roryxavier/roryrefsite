<script lang="ts">
	import ClothingPage from '@/pages/clothing/clothing.page.svelte';
	import { ROUTE_CLOTHING_DISABLED } from '@/vars/meta';
	import { onMount } from 'svelte';
	import { navigate } from 'svelte-routing';

	onMount(() => {
		if (ROUTE_CLOTHING_DISABLED) navigate('/');
	});
</script>

<ClothingPage />
