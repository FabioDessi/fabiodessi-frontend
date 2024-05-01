<script lang="ts">
	import BurgerMenu from '../../icons/BurgerMenu.svelte';

	export let showMenu: boolean;
	export let toggleMenuOverlay: () => void;
</script>

<div class="h-100 px-4 lg:px-12 lg:pt-10 flex justify-between items-center sticky top-0 z-20">
	<a href="/">
		<h1 class:text-white={showMenu} class="font-integralCF text-lg font-extrabold lg:text-2xl">
			FABIODESSI
		</h1>
	</a>
	<button on:click={toggleMenuOverlay} class="rounded-full border-blue-100">
		<BurgerMenu
			className={showMenu ? 'w-12 stroke-white stroke-1' : 'w-12 stroke-current stroke-1'}
		/>
	</button>
</div>
