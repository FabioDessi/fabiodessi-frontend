<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.from('.nav-item-title', {
			duration: 0.5,
			y: '100%',
			stagger: 0.5,
			ease: 'power2.out'
		});
	});
</script>

<nav class="text-white space-y-4 font-anton nav-menu float-left">
	<a href="#" class="block text-4xl uppercase nav-item"
		><span class="pl-8 pr-1 nav-item-title float-left shadow-sm">About</span></a
	>
	<a href="#" class="block text-4xl uppercase nav-item"
		><span class="pl-8 pr-1 nav-item-title float-left shadow-sm">Resume</span></a
	>
	<a href="#" class="block text-4xl uppercase nav-item"
		><span class="pl-8 pr-1 nav-item-title float-left shadow-sm">Portfolio</span></a
	>
	<a href="#" class="block text-4xl uppercase nav-item"
		><span class="pl-8 pr-1 nav-item-title float-left shadow-sm">Blog</span></a
	>
	<a href="#" class="block text-4xl uppercase nav-item"
		><span class="pl-8 pr-1 nav-item-title float-left shadow-sm">Contact</span></a
	>
</nav>

<style>
	.nav-menu {
		overflow: hidden;
	}

	.nav-item {
		overflow: hidden;
	}

	.nav-item-title {
		position: relative;
		overflow: hidden;
	}

	.nav-item-title::before {
		content: '';
		width: 100%;
		height: 100%;
		background-color: #1851f1;
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(-100%);
		transition: transform 1s ease-out;
	}

	.nav-item-title::after {
		content: '';
		width: 100%;
		height: 6px;
		background-color: #1851f1;
		position: absolute;
		top: calc(50% - 3px);
		left: 0;
		transform: translateX(-100%);
		transition: transform 1s ease-out;
	}

	.nav-item:hover .nav-item-title::before {
		transform: translateX(100%);
	}

	.nav-item:hover .nav-item-title::after {
		transform: translateX(0%);
	}
</style>
