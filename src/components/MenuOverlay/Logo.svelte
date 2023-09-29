<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import Airbnb from '../../icons/Airbnb.svelte';

	onMount(() => {
		var tl = gsap.timeline();

		tl.from('.logo-wrapper', {
			duration: 2,
			y: '-200%',
			ease: 'power2.out'
		});
		tl.to('.name-wrapper', {
			duration: 1,
			x: 0,
			ease: 'power2.out'
		});
		tl.to('.title-wrapper', {
			duration: 1,
			x: 0,
			ease: 'power2.out'
		});
		tl.to('.intro-caption', {
			duration: 1,
			x: 0,
			ease: 'power2.out'
		});
	});
</script>

<div class="logo-block pl-8 sm:pl-0 max-w-xs">
	<div class="title-wrapper text-right">
		<span class=" text-white text-sm font-bold font-jost uppercase">Full stack Engineer</span>
	</div>
	<div class="flex">
		<div class="logo-wrapper bg-white flex items-center px-2">
			<Airbnb />
		</div>
		<div class="name-wrapper bg-black px-8 pt-6 pb-3 w-full text-right">
			<span class="text-white text-3xl">Fabio Dessi</span>
		</div>
	</div>
	<div class="intro-caption mt-2">
		<p class="block text-white">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor purus, pretium eu nisl
			vitae, hendrerit porttitor libero. Praesent malesuada sagittis augue vitae volutpat.
		</p>
	</div>
</div>

<style>
	.logo-block {
		overflow: hidden;
	}

	.logo-wrapper {
		z-index: 2;
	}

	.name-wrapper {
		transform: translateX(-200%);
		z-index: 1;
	}

	.title-wrapper {
		transform: translateX(100%);
	}

	.intro-caption {
		white-space: nowrap;
		overflow: hidden;
		transform: translateX(100%);
	}

	.intro-caption > p {
		animation: slide 5s linear infinite;
	}

	@keyframes slide {
		0% {
			text-indent: var(--slider-width);
		}
		100% {
			text-indent: -100%;
		}
	}
</style>
