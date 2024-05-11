<script lang="ts">
	import Contact from './Contact.svelte';
	import SocialLinks from './SocialLinks.svelte';
	import NavMenu from './NavMenu.svelte';
	// import LanguageSelector from './LanguageSelector.svelte';

	export let showMenu: boolean;
</script>

<div
	class="flex flex-col justify-between w-full h-screen bg-red-700 fixed z-10 p-12"
	class:hidden={!showMenu}
>
	<div class="flex">
		<div />
	</div>

	<div class="flex justify-center items-center space-x-16">
		<NavMenu />
		<Contact />
	</div>
	<div class="flex flex-wrap justify-between items-end">
		<SocialLinks />
		<!-- <LanguageSelector /> -->
	</div>
</div>
