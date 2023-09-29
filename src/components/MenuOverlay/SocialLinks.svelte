<script>
	import { onMount } from 'svelte';
	import Github from '../../icons/Github.svelte';
	import Linkedin from '../../icons/Linkedin.svelte';
	import X from '../../icons/X.svelte';
	import gsap from 'gsap';

	onMount(() => {
		gsap.from('.social-links', {
			duration: 2,
			y: '100%',
			ease: 'power2.out'
		});
	});
</script>

<div>
	<ul class="social-links bg-black py-2 px-4 float-left">
		<li class="inline-block mr-2">
			<a href="#">
				<Github />
			</a>
		</li>
		<li class="inline-block mr-2">
			<a href="#">
				<Linkedin />
			</a>
		</li>
		<li class="inline-block mr-2">
			<a href="#">
				<X />
			</a>
		</li>
	</ul>
</div>
