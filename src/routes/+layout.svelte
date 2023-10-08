<script>
	import '../app.css';
	import MenuOverlay from '../components/MenuOverlay/MenuOverlay.svelte';
	import Header from '../components/Header/Header.svelte';
	import Footer from '../components/Footer/Footer.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Anton&family=Jost:wght@100;200;300;400;700;800;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<MenuOverlay />
<div class="w-full px-8">
	<Header />
	<slot />
	<Footer />
</div>
