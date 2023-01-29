<script>
	// import UnderConstruction from '../../../comps/UnderConstruction.svelte';
	import ResponsiveContainer from '../../../comps/common/ResponsiveContainer.svelte';
	import fo from '../../../vars/Fursonas';
	const furInfo = fo[0];
</script>

<main>
	<ResponsiveContainer>
		<h1 class="text-4xl">General</h1>
		<table class="w-full table-fixed">
			<thead>
				<th class="border-t-2 border-b-2 border-indigo-500">Key</th>
				<th class="border-t-2 border-b-2 border-indigo-500">Value</th>
			</thead>
			<tbody>
				{#each furInfo.generalBioTableKVPair as data}
					<tr>
						<td class="text-right pr-5 pb-2 text-base">{data.key}</td>

						<td class="text-left pl-5 pb-2 text-baseel">{data.value}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</ResponsiveContainer>
</main>
