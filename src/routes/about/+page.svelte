<script lang="ts">
	import AboutPage from '@/pages/about/about.page.svelte';
	import { ROUTE_ABOUT_DISABLED } from '@/vars/meta';
	import { onMount } from 'svelte';
	import { navigate } from 'svelte-routing';

	onMount(() => {
		if (ROUTE_ABOUT_DISABLED) navigate('/');
	});
</script>

<AboutPage />
