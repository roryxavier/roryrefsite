<script>
	import badge from '../../assets/badge.webp';
	import globalVars from '../../vars/GlobalVars';

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
		<div class="Download-SFW">
			<div class="Download-SFW-shadow" />
			<button
				class="Download-SFW-button"
				on:click={() => {
					window.alert('🦊');
				}}
				>Download {referenceAvailability.nsfw ? 'SFW ' : ''}Refsheet (10 MB) ⬇️
			</button>
		</div>

		{#if referenceAvailability.nsfw}
			<div class="Download-SFW">
				<div class="Download-SFW-shadow" />
				<button
					class="Download-SFW-button"
					on:click={() => {
						window.alert('╰⋃╯🍆');
					}}
					>Download NSFW Refsheet (10.2 MB) ⬇️
				</button>
			</div>
		{/if}
	</div>

	<div class="Reference-dirty-option">
		😇
		<button
			on:click={() => {
				referenceAvailability.nsfw = !referenceAvailability.nsfw;
			}}
			>Toggle
		</button>
		😈
	</div>
</main>

<style>
	.Reference-dirty-option {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
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

	.Download-SFW {
		width: 100%;
		position: relative;
		display: flex;
	}

	.Download-SFW-button {
		z-index: 2;
		width: 100%;
		background-color: #224071;
		color: white;
		padding: 1.5rem;
		transition: all 0.2s;
		border-radius: 0.5em;
	}

	.Download-SFW-button:hover {
		transform: translateY(-0.2rem);
	}

	.Download-SFW-shadow {
		z-index: 1;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		border-radius: 0.5em;
		transform: translateY(0.5rem);

		background-color: #162338;
	}

	.Note {
		background: linear-gradient(90deg, hsla(0, 0%, 0%, 0.4), transparent);
		color: white;
		borde\r-left: 0.2em solid #224071;
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
