<script lang="ts">
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

<table class="w-full table-fixed" style="border-bottom: 1px solid indigo">
	<div class="Row Row-title">
		<th class="Row-key">Body Parts</th>
		<th class="Row-key">Value</th>
		<th class="Row-key">Colour</th>
	</div>
	{#each Array(body_parts.length) as _, i}
		<tr class="Row Row-content">
			<td class="Row-key">{body_parts[i]}</td>
			<td class="Row-key">{colour_value[i].toUpperCase()}</td>
			<td class="Row-key" style="padding: 0"
				><div class="h-full p-0" style="background-color: {colour_value[i]};" /></td
			>
		</tr>
	{/each}
</table>

<style lang="scss">
	.Row {
		display: flex;
		flex-direction: row;
		justify-content: stretch;
		gap: 2rem;

		& > * {
			width: 100%;
			flex-grow: 1;
			padding: 0.3rem;
		}

		.Row-key {
			text-align: end;
		}

		.Row-value {
			text-align: start;
		}
	}

	.Row-title {
		font-weight: 800;
		border: 1px solid indigo;
		border-left: none;
		border-right: none;
	}

	.Row-content {
		transition: 200ms;

		&:hover {
			background-color: rgba(0, 0, 0, 0.2);
		}
	}
</style>
