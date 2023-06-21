<script lang="ts">
	import ColorBar from './ColorBar.svelte';

	const body_parts = [
		'Main Body Part',
		'Hair Soft Colour',
		'Hair Secondary Colour',
		'Inner Body Part',
		'Inner Body Part Line',
		'Leg',
		'Tail First layer',
		'Tail Second Layer',
		'Eye outer colour',
		'Eye Half Top Ring',
		'Eye Half Bottom Ring',
		'Eye Middle'
	];
	const colour_value = [
		'#6bc5fa',
		'#44c8ff',
		'#5a9be9',
		'#ffffff',
		'#0f0f0f',
		'#656469',
		'#00019a',
		'#10124b',
		'#fff4de',
		'#5d9aeb',
		'#7af9fe',
		'#00024c'
	];
</script>

<table class="w-full flex flex-col gap-0.5" style="border-bottom: 1px solid indigo">
	<div class="Row Row-title">
		<th>Body Parts</th>
		<th class="Row-title-color">Colour</th>
	</div>
	{#each Array(body_parts.length) as _, i}
		<tr class="Row Row-content">
			<td>{body_parts[i]}</td>
			<td style="padding: 0">
				<ColorBar hexColor={colour_value[i]} />
			</td>
		</tr>
	{/each}
</table>

<style lang="scss">
	.Row {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 2rem;

		& > * {
			padding: 0.3rem;
		}

		&:nth-child(0) {
			width: 100%;
			text-align: start;
			flex-grow: 1;
		}
		&:nth-child(1) {
			width: 100%;
			text-align: start;
			flex-grow: 0;
		}
	}

	.Row-title {
		font-weight: 800;
		border: 1px solid indigo;
		border: 1px solid black; // align with theme
		border-left: none;
		border-right: none;
		padding: 0.2rem;

		.Row-title-color {
			width: 8rem;
			min-width: 8rem;
			text-align: center;
		}
	}
	.Row-content {
		transition: 200ms;
		padding: 0.2rem;
		border-radius: 0.5rem;

		&:hover {
			background-color: rgba(0, 0, 0, 0.1);
		}
	}
</style>
