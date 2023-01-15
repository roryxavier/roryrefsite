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
		<header>
			<img alt="Rory Badge" src={badge} />
			<p class="text-3xl">Rory Chris</p>
		</header>

		<p class="description">Character Reference Page</p>

		<p>Welcome to Rory's Ref Page</p>
		<p>On this page your can learn all about Rory, your friendly neighborhood blue wolf!</p>
		<p>
			I started this page to have a single point of truth with all the info artists I commission can
			possibly need. If you're missing some crucial info, or you would like to give me some general
			feedback about this page, feel free to reach out!
		</p>

		<ul class="Page-Socials">
			{#each globalVars.socialLink as socialLink}
				<li>
					<SocialButton title={socialLink.title} icon={socialLink.icon} href={socialLink.href} />
				</li>
			{/each}
		</ul>

		<p class="Note">
			<b>Note:</b> This page is still under heavy construction, as indicated by the 0.x.x version number
			in the footer. I'm continously updating the site and adding details and information to it. In case
			you run into something weird, definitely let me know!
		</p>

		<h2>Complete Ref Sheet</h2>
		<p>Just here to fetch the ref sheet?</p>

		<div class="References">
			<ReferenceButton
				title={referenceAvailability.nsfw
					? 'Download SFW Refsheet (10 MB) ⬇️'
					: 'Download Refsheet (10 MB) ⬇️'}
				onClick={() => window.alert('🦊')}
			/>

			{#if referenceAvailability.nsfw}
				<ReferenceButton
					title={'Download NSFW Refsheet (10.2 MB) ⬇️'}
					onClick={() => window.alert('╰⋃╯🍆')}
				/>
			{/if}
		</div>

		<SfwToggle onClick={() => (referenceAvailability.nsfw = !referenceAvailability.nsfw)} />
	</main>
</div>

<style lang="scss">
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

				img {
					width: 10em;
					border-radius: 0.8em;
				}

				p {
					font-weight: 500;
					font-size: 2rem;
				}
			}

			p {
				margin: 1rem 0;
			}

			.description {
				margin-top: 8em;
				margin-left: auto;
				margin-right: auto;
				font-style: italic;
				text-align: center;
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
