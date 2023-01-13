<svelte:options accessors />

<script lang="ts">
	import type Fursona from '../../../model/Fursona';
	import NavBarButton from './NavBar-Button.svelte';

	export let menus: Fursona[] = [];
</script>

<div class="NavBarDropDown">
	<NavBarButton title="Fursona" onClick={() => console.log('hello world')} />
	<div class="NavBarDropDown-body">
		{#each menus as menu}
			<i>{menu.name}</i>
		{/each}
	</div>
</div>

<style lang="scss">
	.NavBarDropDown {
		overflow: visible;
		padding-right: 12px;
		padding-left: 12px;
		display: flex;
		align-items: center;
		position: relative;
		.NavBarDropDown-button {
			padding-right: 15px;
			padding-left: 15px;
		}
		.NavBarDropDown-body {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;

			width: max-content;
			background-color: white;
			padding: 0.5rem;
			position: fixed;
			margin-top: 7rem;
			margin-left: -2rem;
			border-radius: 0.2rem;
		}
	}
</style>
