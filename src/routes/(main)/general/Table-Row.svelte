<script lang="ts">
	export let isTitle = false;
	export let key = '';
	export let value = '';
</script>

{#if isTitle}
	<thead class="Row Row-title">
		<th class="Row-key">Key</th>
		<th class="Row-value">Value</th>
	</thead>
{/if}

{#if !isTitle}
	<tr class="Row Row-content">
		<td class="Row-key">{key}</td>
		<td class="Row-value">{value}</td>
	</tr>
{/if}

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
