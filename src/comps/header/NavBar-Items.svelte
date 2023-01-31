<script lang="ts">
	import { onMount } from 'svelte';
	import NavBarButton from './NavBar-Button.svelte';
	import NavBarDropDown from './NavBar-DropDown.svelte';
	import globalVars from '../../vars/GlobalVars';
	import Fusonas from '../../vars/Fursonas';

	export let onClickItem = (item: Object) => {};

	const { navigationsLinks } = globalVars;
	const furList = Fusonas;

	// variables
	let pathname = '';

	// lifecycles
	onMount(() => {
		pathname = window.location.pathname;
	});
</script>

{#each navigationsLinks as navigation}
	<NavBarButton
		isSelected={navigation.path === pathname}
		title={navigation.title}
		href={navigation.path}
		onClick={() => {
			pathname = navigation.path;
			onClickItem(navigation);
		}}
	/>
{/each}
<!-- <NavBarDropDown menus={furList} /> -->
