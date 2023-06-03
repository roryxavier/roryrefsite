<script>
	import badge from '../assets/badge.webp';
	import globalVars from '../vars/GlobalVars';
	import ReferenceButton from '../comps/home/Reference-Button.svelte';

	import SocialButton from '../comps/home/SocialButton.svelte';
	import Fursonas from '../vars/Fursonas';
	import CardText from '../comps/common/CardText.svelte';
	import SectionTitle from '../comps/common/SectionTitle.svelte';

	const roryInfo = Fursonas.find((fur) => fur.name === 'Rory Chris');
</script>

<div class="Page">
	<main class="Page-body flex flex-col gap-12">
		<div class="Page-header flex flex-col items-center gap-1">
			<img alt="Rory Badge" src={badge} class="md:w-60 w-40 rounded-3xl" />
			<span class="text-center font-bold text-3xl text-blue-500">Rory Here!</span>
			<span class="text-center text-lg">24 | He/Him</span>
		</div>

		<div class="flex flex-col gap-2">
			<h2 class="font-bold text-2xl">Welcome to Rory's Refsheet Page</h2>
			<p class="text-justify leading-6 text-lg">
				Welcome to the reference sheet for Rory, your friendly neighborhood blue wolf. As a
				programmer and furry, I created this page to gather all information about my fursona in one
				central location. I also wanted to provide a single source of truth for any artist
				commission needs. If you have any questions or feedback, don't hesitate to reach out to me.
			</p>
		</div>

		<ul class="flex flex-row flex-wrap items-stretch justify-start gap-1">
			{#each globalVars.socialLink as socialLink}
				<li>
					<SocialButton title={socialLink.title} icon={socialLink.icon} href={socialLink.href} />
				</li>
			{/each}
		</ul>

		<CardText>
			<b>Note:</b> Please note that this page is still a work in progress, as indicated by the version
			number 0.x.x in the footer. I am actively updating and refining the site, adding more information
			and details. If you encounter any issues, please do not hesitate to bring them to my attention.
		</CardText>

		<div class="flex flex-col gap-2">
			<h1 class="text-4xl mb-3" id="ref_sheet_dl">Complete RefSheet</h1>
			<p>
				Just here to fetch the ref sheet? Click the button with the ref sheet you need and get
				started!
			</p>
			<div class="max-w-xs flex flex-col align-center" style="width: 100%; margin: auto;">
				<ReferenceButton
					title="Download Refsheet (4.7MB) ⬇"
					onClick={() => window.open(roryInfo.ref_link, '_blank')}
				/>
			</div>
		</div>
	</main>
</div>

<style lang="scss">
	// .Page-header {
	// 	gap: 1rem;
	// 	@media (min-width: 520px) {
	// 		flex-direction: row;
	// 		gap: 2rem;
	// 	}

	// 	& > * {
	// 		& > * {
	// 			line-height: 1em;
	// 			margin: 0.2rem 0;
	// 		}
	// 	}
	// }

	.Page {
		main {
			max-width: var(--max-content-width);
			display: flex;
			flex-direction: column;
			align-items: stretch;
			margin: 0.5rem;
			padding: 1rem;
			font-size: 1.25rem;

			header {
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 2rem;
				gap: 0.5rem;
			}

			// .Page-section-title {
			// 	margin-top: 2em;
			// }

			// .Note {
			// 	background: linear-gradient(90deg, hsla(0, 0%, 0%, 0.4), transparent);
			// 	color: white;
			// 	border-left: 0.2em solid #224071;
			// 	padding: 1rem;
			// }
		}
	}
</style>
