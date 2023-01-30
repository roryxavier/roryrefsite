<script>
	// import UnderConstruction from '../../../comps/UnderConstruction.svelte';
	import ResponsiveContainer from '../../../comps/common/ResponsiveContainer.svelte';
	import fo from '../../../vars/Fursonas';
	import CompCard from '../../../comps/common/CompCard.svelte';

	const furInfo = fo[0];

	// Test if it last element
	let last = (a, i) => i === a.length - 1;
</script>

<main>
	<ResponsiveContainer>
		<h1 class="text-4xl mb-8">General</h1>
		<div class="h-0.5" />
		<table class="w-full table-fixed">
			<thead>
				<th class="border-t-2 border-b-2 border-indigo-500">Key</th>
				<th class="border-t-2 border-b-2 border-indigo-500">Value</th>
			</thead>
			<tbody>
				{#each furInfo.generalBioTableKVPair as data, i}
					<tr>
						{#if last(furInfo.generalBioTableKVPair, i)}
							<td class="text-right pr-5 pb-2 text-base border-b-2 border-b-2 border-indigo-500"
								>{data.key} {i}</td
							>
							<td class="text-left pl-5 pb-2 text-base border-b-2 border-b-2 border-indigo-500"
								>{data.value}</td
							>
						{:else}
							<td class="text-right pr-5 pb-2 text-base">{data.key} {i}</td>
							<td class="text-left pl-5 pb-2 text-base">{data.value}</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
		<h1 class="text-4xl mb-8  mt-8">Personality</h1>

		<CompCard />
	</ResponsiveContainer>
</main>
