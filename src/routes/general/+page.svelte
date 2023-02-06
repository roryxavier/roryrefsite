<script>
	// import UnderConstruction from '../../../comps/UnderConstruction.svelte';
	import ResponsiveContainer from '../../comps/common/ResponsiveContainer.svelte';
	import Fursonas from '../../vars/Fursonas';
	import TableTitle from './Table-Title.svelte';
	import TableRow from './Table-Row.svelte';
	import DropDownCard from '../../comps/common/DropDownCard.svelte';
	import Quickfact from '../../vars/Quickfact';

	const roryInfo = Fursonas.find((fur) => fur.name === 'Rory Chris');

	// Test if it last element
	let isLast = (a, index) => index === a.length - 1;
</script>

<main>
	<ResponsiveContainer>
		<div class="Section">
			{#if roryInfo}
				<TableTitle title="General" />
				<table class="w-full table-fixed" style="border-bottom: 1px solid indigo">
					<TableRow key="Key" value="Value" isTitle={true} />
					{#each roryInfo.generalProperties as property}
						<TableRow key={property.key} value={property.value} />
					{/each}
				</table>
			{/if}
		</div>

		<div class="Section">
			<TableTitle title="Personality" />
			<DropDownCard title="QuickFacts">
				<div class="grid md:grid-cols-2 sm:grid-cols-1 pl-5 pr-5">
					{#each Quickfact as quick}
						<li>{quick}</li>
					{/each}
				</div>
			</DropDownCard>
		</div>
	</ResponsiveContainer>
</main>

<style lang="scss">
	.Section {
		margin-bottom: 2rem;
	}
</style>
