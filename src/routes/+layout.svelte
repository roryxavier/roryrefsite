<script>
	import RootLayout from '@/comps/common/RootLayout.svelte';
	import OgImage from '@/assets/og-image.png';
	import '@/app.css';
</script>

<svelte:head>
	<meta name="twitter:title" content="Rory Xavier" />
	<meta name="twitter:image" content={OgImage} />
	<meta name="twitter:description" content="Rory Chris | Character Information Page" />

	<meta name="title" property="og:title" content="Rory Xavier" />
	<meta name="type" property="og:type" content="website" />
	<meta name="image" property="og:image" content={OgImage} />
	<meta name="url" property="og:url" content="https://ref.rorywolf.net/favicon.ico" />
	<meta
		name="description"
		property="og:description"
		content="Rory Chris | Character Information Page"
	/>
</svelte:head>

<main>
	<RootLayout>
		<slot />
	</RootLayout>
</main>
