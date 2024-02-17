<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Lenis from '@studio-freight/lenis';

	onMount(() => {
		// Lenis implementation
		const lenis = new Lenis();
		lenis.on('scroll', ScrollTrigger.update);
		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
		gsap.registerPlugin(ScrollTrigger);

		// Horizontal parallax animation
		gsap.utils.toArray('.parallax-text').forEach((text, index) => {
			gsap.to(text, {
				x: () => (index === 0 ? 400 : index === 1 ? 0 : -400),
				ease: 'none',
				scrollTrigger: {
					trigger: '#parallax-section',
					start: 'top center',
					end: 'bottom top',
					scrub: true
				}
			});
		});
	});
</script>

<section id="parallax-section" class="flex items-center justify-center h-screen">
	<div>
		<div class="parallax-text block">
			<span class="font-integralCF text-10xl tracking-wide">This is</span>
			<span class="font-integralCF text-10xl tracking-wide text-red-700 ml-1">Fabio Dessì,</span>
		</div>
		<div class="parallax-text block text-center">
			<span class=" font-integralCF text-10xl tracking-wide">Senior</span>
		</div>
		<div class="parallax-text block">
			<span class="font-integralCF text-10xl tracking-wide text-red-700">Full Stack</span>
			<span class="font-integralCF text-10xl tracking-wide ml-1"> Engineer</span>
		</div>
	</div>
</section>
<section class="flex items-center justify-center">
	<div class="container mx-auto px-16">
		<p class="font-robotoSlab text-5xl font-thin tracking-wide text-center leading-[4rem]">
			I worked as a web developer <strong>since 2013</strong>. During this time i had the pleasure
			to work with different aspects of the web. If you are interested in knowing more about this
			journey
		</p>
		<div class="flex justify-center mt-16">
			<a
				class="bg-red-700 py-2 px-8 text-white uppercase rounded-full font-integralCF font-extralight text-base tracking-wide"
				data-sveltekit-preload-data="tap"
				href="/about"
			>
				Read about my me
			</a>
		</div>
	</div>
</section>
