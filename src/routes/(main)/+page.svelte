<script>
	import badge from '../../assets/badge.webp';
	import globalVars from '../../vars/GlobalVars';
	import ReferenceButton from './comps/Reference-Button.svelte';
	import SfwToggle from './comps/SFW-Toggle.svelte';

	const referenceAvailability = {
		sfw: true,
		nsfw: false
	};
</script>

<title>Rory Chris</title>
<main>
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
	<ul>
		{#each globalVars.socialLink as socialLink}
			<li>
				<a href={socialLink.href} target="_blank" rel="noopener noreferrer">
					{#if typeof socialLink.icon === 'string' && socialLink.icon.trim().length}<img
							src={socialLink.icon}
							alt={`Icon ${socialLink.title}`}
						/>{/if}<span>{socialLink.title}</span></a
				>
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

<style>
	.References {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: var(--max-content-width);
		gap: 01rem;
	}

	.Note {
		background: linear-gradient(90deg, hsla(0, 0%, 0%, 0.4), transparent);
		color: white;
		border-left: 0.2em solid #224071;
		padding: 1rem;
	}

	main {
		max-width: var(--max-content-width);
		display: flex;
		flex-direction: column;
		align-items: stretch;
		margin: 0.5rem;
		padding: 1rem;
		font-size: 1.25rem;
	}

	main p {
		margin: 1rem 0;
	}

	main ul {
		width: 10rem;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 0.6rem;
	}

	main ul li a {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 0.4rem;
		transition: all 0.2s;
		border-radius: 0.3rem;
	}

	main ul li a img {
		width: 1em;
		height: 1em;
		object-fit: cover;
	}

	main ul li a span {
		flex-grow: 1;
		text-align: start;
	}

	main ul li a:hover {
		transform: translateY(-0.2rem);
	}

	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		gap: 0.5rem;
	}

	header img {
		width: 10em;
		border-radius: 0.8em;
	}

	header p {
		font-weight: 500;
		font-size: 2rem;
	}

	.description {
		margin-top: 8em;
		margin-left: auto;
		margin-right: auto;
		font-style: italic;
		text-align: center;
	}
</style>
