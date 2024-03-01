<script lang="ts">
import '../app.css';
import MenuOverlay from '../components/MenuOverlay/MenuOverlay.svelte';
import Header from '../components/Header/Header.svelte';
import Footer from '../components/Footer/Footer.svelte';
import CustomCursor from '../components/CustomCursor/CustomCursor.svelte';

let showMenu = false;

const toggleMenuOverlay = () => {
  const body = document.body;
  body?.classList.toggle('overflow-hidden');
  showMenu = !showMenu;
};

</script>

<MenuOverlay showMenu={showMenu} toggleMenuOverlay={toggleMenuOverlay} />

<div class="w-full">
  <CustomCursor />
  <Header toggleMenuOverlay={toggleMenuOverlay} showMenu={showMenu} />
  <slot />
  <Footer />
</div>
