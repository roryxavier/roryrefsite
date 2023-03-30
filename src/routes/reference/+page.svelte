<script>
	import ResponsiveContainer from '../../comps/common/ResponsiveContainer.svelte';
	import Fursonas from '../../vars/Fursonas';
	import SectionTitle from '../../comps/common/SectionTitle.svelte';

	import TableRow from '../../comps/common/TableRow.svelte';
	import TableColour from './TableColour.svelte';

	const currSona = 'Rory Chris';

	const roryInfo = Fursonas.find((fur) => fur.name === currSona);
</script>

<main>
	<ResponsiveContainer>
		<SectionTitle title="Reference" id_tag="Reference" />
		<div class="flex flex-col space-y-0.5">
			<img src={roryInfo.ref_link + '?width=1000'} alt="Rory Chris RefSheet" style="width: 120%;" />
			<div class="text-center">Rory Chris Full Body Reference</div>
			<span class="text-base text-center">
				art by <a
					class="text-blue-600"
					href="https://twitter.com/valdithzam"
					target="_blank"
					rel="noreferrer">@valdithzam</a
				></span
			>
		</div>
		<SectionTitle title="Colour Palette" id_tag="colour_palette" />
		<TableColour />
	</ResponsiveContainer>
</main>
