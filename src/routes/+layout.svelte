<script>
	import '../app.css';
	import MenuOverlay from '../components/MenuOverlay/MenuOverlay.svelte';
	import Header from '../components/Header/Header.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import CustomCursor from '../components/CustomCursor/CustomCursor.svelte';
</script>

<MenuOverlay />

<div class="w-full">
	<CustomCursor />
	<Header />
	<slot />
	<Footer />
</div>
