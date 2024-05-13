<script lang="ts">
	import MenuOverlay from '$components/MenuOverlay/MenuOverlay.svelte';
	import Analytics from '$lib/analytics.svelte';
	import Header from '$components/Header/Header.svelte';
	import Footer from '$components/Footer/Footer.svelte';
	// import CustomCursor from '@components/CustomCursor/CustomCursor.svelte';
	import '$app.css';

	let showMenu = false;

	const toggleMenuOverlay = () => {
		const body = document.body;
		body?.classList.toggle('overflow-hidden');
		showMenu = !showMenu;
	};
</script>

<div class="w-full">
	<Analytics />
	<MenuOverlay {showMenu} />
	<!-- <CustomCursor /> -->
	<Header {toggleMenuOverlay} {showMenu} />
	<slot />
	<Footer />
</div>

<style>
	/* width */
	:global(::-webkit-scrollbar) {
		width: 10px;
	}

	/* Track */
	:global(::-webkit-scrollbar-track) {
		background: #f1f1f1;
	}

	/* Handle */
	:global(::-webkit-scrollbar-thumb) {
		background: #888;
	}

	/* Handle on hover */
	:global(::-webkit-scrollbar-thumb:hover) {
		background: #555;
	}
</style>
