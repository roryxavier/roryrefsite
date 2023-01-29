<div class="Ribbon">
	<span>WIP</span>
</div>

<style lang="scss">
	.Ribbon {
		--length: 200px;
		--thickness: 1.5em;
		--x: 0px;
		--y: -20px;

		font-size: 0.8rem;

		width: var(--length);
		height: var(--length);
		text-align: center;
		display: flex;
		padding: 0 var(--padding-horizontal);
		pointer-events: none;

		z-index: 3;
		position: fixed;
		top: 0;
		right: 0;
		transform: rotate(45deg);

		& > * {
			width: var(--length);
			height: var(--thickness);
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #f14335;
			color: white;
			transform: translateX(var(--x)) translateY(var(--y));
		}
	}
</style>
