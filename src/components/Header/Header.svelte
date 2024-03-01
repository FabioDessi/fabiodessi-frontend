<script lang="ts">
import BurgerMenu from '../../icons/BurgerMenu.svelte';

export let showMenu: boolean;
export let toggleMenuOverlay: () => void;
</script>

<div class="h-100 py-1 px-10 flex justify-between items-center sticky top-0 z-20">
  <a href="/">
    <h1 class="font-integralCF font-extrabold text-2xl">FABIODESSI</h1>
  </a>
  <BurgerMenu toggleMenuOverlay={toggleMenuOverlay} showMenu={showMenu} />
</div>
