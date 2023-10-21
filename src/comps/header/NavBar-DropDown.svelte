<svelte:options accessors />

<script lang="ts">
	import NavBarButton from './NavBar-Button.svelte';
	import type Fursona from '@/model/Fursona';

	export let menus: Fursona[] = [];

	let isShowing = false;
	let isChildrenFocus = false;

	let toggle = (force = false) => {
		isShowing ? hide(force) : show();
	};
	let show = () => {
		setTimeout(() => {
			isShowing = true;
		}, 300);
	};
	let hide = (force = false) => {
		if (!isShowing) return;

		setTimeout(() => {
			if (!force && isChildrenFocus) return;
			isShowing = false;
			isChildrenFocus = false;
		}, 300);
	};
</script>

<div class="NavBarDropDown">
	<NavBarButton
		title="Fursona"
		isSelected={isShowing}
		onClick={() => toggle(true)}
		onBlur={() => hide()}
		onFocus={() => show()}
	/>

	<div
		class={`NavBarDropDown-body ${
			isShowing ? 'NavBarDropDown-body-isExpand' : 'NavBarDropDown-body-isCollapse'
		}`}
	>
		{#each menus as menu}
			<NavBarButton
				title={menu.name}
				onClick={() => hide(true)}
				onFocus={() => (isChildrenFocus = true)}
				onBlur={(e) => {
					isChildrenFocus = false;
					e.target.blur();
					hide();
				}}
			/>
		{/each}
	</div>
</div>

<style lang="scss">
	.NavBarDropDown {
		overflow: visible;
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

			position: fixed;
			width: max-content;
			padding: 0.8rem;
			margin-top: 7rem;
			margin-left: -2.5rem;

			background-color: white;
			border-radius: 0.5rem;
			box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

			transition: all 200ms cubic-bezier(1, 0, 0, 1);
		}
		.NavBarDropDown-body-isExpand {
			opacity: 1;
		}
		.NavBarDropDown-body-isCollapse {
			transform: translateY(-0.5rem);
			opacity: 0;
			pointer-events: none;
		}
	}
</style>
