<script lang="ts">
	import { onMount } from 'svelte';
	import NavBarButton from './NavBar-Button.svelte';
	// import NavBarDropDown from './NavBar-DropDown.svelte';
	// import { LIST as Fusonas } from '@/vars/Fursonas';
	import type RouteInfo from '@/model/RouteInfo';
	import { list as navigationsLinks } from '@/model/RouteInfo';

	export let onClickItem = (item: RouteInfo) => {};

	let pathname = '';

	onMount(() => {
		pathname = window.location.pathname;
		window.addEventListener('popstate', () => {
			pathname = window.location.pathname;
		});
	});
</script>

{#each navigationsLinks as navigation}
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
