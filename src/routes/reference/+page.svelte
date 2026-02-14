<script>
	import ResponsiveContainer from '@/comps/common/ResponsiveContainer.svelte';
	import { FURSONA_RORY_CHRIS } from '@/model/Fursona';
	import SectionTitle from '@/comps/common/SectionTitle.svelte';
	import ReferenceButton from '@/comps/home/Reference-Button.svelte';
	import TableColour from './TableColour.svelte';
</script>

<main>
	<ResponsiveContainer>
		<SectionTitle title="Reference" id_tag="Reference" />
		<div class="flex flex-col space-y-0.5">
			<img
				src={FURSONA_RORY_CHRIS.ref.small ?? FURSONA_RORY_CHRIS.ref.full}
				alt="Rory Chris RefSheet"
				style="width: 120%; border-radius: 0.3em"
			/>
			<div class="text-center">Rory Chris Full Body Reference</div>
			<span class="text-base text-center">
				art by <a
					class="text-blue-600"
					href="https://twitter.com/valdithzam"
					target="_blank"
					rel="noreferrer">{FURSONA_RORY_CHRIS.ref.author}</a
				></span
			>
			<div class="h-1.5" />
			<div class="max-w-xs flex flex-col align-center" style="width: 100%; margin: auto;">
				<ReferenceButton
					title="Download Refsheet (4.7MB) ⬇"
					onClick={() => window.open(FURSONA_RORY_CHRIS.ref.full, '_blank')}
				/>
			</div>
		</div>
		<SectionTitle title="Colour Palette" id_tag="colour_palette" />
		<TableColour />
	</ResponsiveContainer>
</main>
