<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	onMount(() => {
		// Using gsap to fade in the loading spinner
		gsap.to('.loading-spinner', { duration: 1, opacity: 1, ease: 'power2.out' });
	});
</script>

<div class="loading-spinner flex justify-center items-center opacity-0">
	<div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
		<span class="visually-hidden">Loading...</span>
	</div>
</div>

<style>
	.spinner-border {
		border-color: transparent;
		border-top-color: #3498db; /* Use your primary color here */
		border-right-color: #3498db; /* Use your primary color here */
	}
	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}
</style>
