<script>
	import badge from '../../assets/badge.webp';
	import globalVars from '../../vars/GlobalVars';
	import ReferenceButton from '../../comps/home/Reference-Button.svelte';
	import SfwToggle from '../../comps/home/SFW-Toggle.svelte';
	import SocialButton from '../../comps/home/SocialButton.svelte';

	const referenceAvailability = {
		sfw: true,
		nsfw: false
	};
</script>

<div class="Page">
	<title>Rory Chris</title>

	<main class="Page-body">
		<div class="Page-header flex flex-row items-center" style="padding: 2rem">
			<img alt="Rory Badge" src={badge} class="w-40 rounded-3xl" />

			<div class="flex flex-col grow items-center">
				<p class="text-center font-bold text-4xl">Rory Chris</p>
				<p class="text-center">Character Information Page</p>
			</div>
		</div>

		<p class="mb-5 font-bold text-1l">Welcome to Rory's Info Page</p>
		<p class="text-justify">
			Welcome to the reference sheet for Rory, your friendly neighborhood blue wolf. As a programmer
			and furry, I created this page to gather all information about my fursona in one central
			location. I also wanted to provide a single source of truth for any artist commission needs.
			If you have any questions or feedback, don't hesitate to reach out to me.
		</p>

		<div class="mb-5" />
		<ul class="Page-Socials">
			{#each globalVars.socialLink as socialLink}
				<li>
					<SocialButton title={socialLink.title} icon={socialLink.icon} href={socialLink.href} />
				</li>
			{/each}
		</ul>
		<div class="mb-5" />

		<p class="Note">
			<b>Note:</b> Please note that this page is still a work in progress, as indicated by the version
			number 0.x.x in the footer. I am actively updating and refining the site, adding more information
			and details. If you encounter any issues, please do not hesitate to bring them to my attention.
		</p>
		<div class="mb-5" />
		<h2>Complete Ref Sheet</h2>
		<p>Just here to fetch the ref sheet?</p>

		<div class="mb-5" />
		<div class="References">
			<ReferenceButton
				title="Download Refsheet (10 MB) ⬇ (NOT WORK)️"
				onClick={() => window.alert('🦊')}
			/>
		</div>
	</main>
</div>

<style lang="scss">
	.Page-header {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		@media (min-width: 520px) {
			flex-direction: row;
			gap: 2rem;
		}

		& > * {
			& > * {
				line-height: 1em;
				margin: 0.2rem 0;
			}
		}
	}

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

				//img {
				//	width: 10em;
				//	border-radius: 0.8em;
				//}

				//p {
				//	font-weight: 500;
				//	font-size: 2rem;
				//}
			}

			//
			//p {
			//	margin: 1rem 0;
			//}

			.Page-section-title {
				margin-top: 2em;
			}

			.Page-Socials {
				width: 10rem;
				display: flex;
				flex-direction: column;
				align-items: stretch;
				gap: 0.6rem;
			}

			.Note {
				background: linear-gradient(90deg, hsla(0, 0%, 0%, 0.4), transparent);
				color: white;
				border-left: 0.2em solid #224071;
				padding: 1rem;
			}

			.References {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 100%;
				max-width: var(--max-content-width);
				gap: 01rem;
			}
		}
	}
</style>
