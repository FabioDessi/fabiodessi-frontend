<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let position = { x: 0, y: 0 };
	let isCursorVisible = false;
	let remInPixels;
	let isThrottled = false;
	const throttleDuration = 2550;

	onMount(() => {
		remInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);
		const cursorOffset = remInPixels / 2;

		const updatePosition = (event) => {
			if (isThrottled) return;
			isThrottled = true;
			setTimeout(() => {
				isThrottled = false;
			}, throttleDuration);

			position = {
				x: event.clientX - cursorOffset,
				y: event.clientY - cursorOffset
			};

			gsap.to('.custom-cursor', {
				duration: 0.2,
				x: position.x,
				y: position.y,
				ease: 'power2.out'
			});
		};

		document.addEventListener('mousemove', updatePosition);
		document.addEventListener('mouseenter', () => (isCursorVisible = true));
		document.addEventListener('mouseleave', () => (isCursorVisible = false));

		return () => {
			document.removeEventListener('mousemove', updatePosition);
			document.removeEventListener('mouseenter', () => (isCursorVisible = true));
			document.removeEventListener('mouseleave', () => (isCursorVisible = false));
		};
	});
</script>

{#if isCursorVisible}
	<div class="custom-cursor" />
{/if}

<style>
	.custom-cursor {
		position: fixed;
		pointer-events: none;
		width: 1rem;
		height: 1rem;
		background-color: #000;
		border-radius: 50%;
		z-index: 9999;
	}
</style>
