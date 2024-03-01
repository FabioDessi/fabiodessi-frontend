<script lang="ts">
import Logo from './Logo.svelte';
import SocialLinks from './SocialLinks.svelte';
import NavMenu from './NavMenu.svelte';

export let showMenu: boolean;
</script>

<div
  class="flex flex-col justify-between w-full h-screen bg-red-700 absolute z-10"
  class:hidden={!showMenu}
>
  <div class="flex">
    <div />
  </div>

  <div class="flex justify-between items-center">
    <NavMenu />
    <Logo />
    <div>LOGO</div>
  </div>

  <SocialLinks />
</div>
