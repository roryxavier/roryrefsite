<script lang="ts">
	import { onMount } from 'svelte';
	import NavBarButton from './NavBar-Button.svelte';
	import type { RouteInfoModel } from '@/model/RouteInfo';
	import { ROUTE_NAVIGATIONS } from '@/vars/meta';
	// import NavBarDropDown from './NavBar-DropDown.svelte';
	// import { LIST as Fusonas } from '@/vars/Fursonas';

	export let onClickItem = (item: RouteInfoModel) => {};

	let pathname = '';

	onMount(() => {
		pathname = window.location.pathname;
		window.addEventListener('popstate', () => {
			pathname = window.location.pathname;
		});
	});
</script>

{#each ROUTE_NAVIGATIONS as navigation}
	<NavBarButton
		isSelected={navigation.path === pathname}
		title={navigation.title}
		href={navigation.path}
		onClick={() => {
			pathname = navigation.path;
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			onClickItem(navigation);
		}}
	/>
{/each}
<!-- <NavBarDropDown menus={Fusonas} /> -->
