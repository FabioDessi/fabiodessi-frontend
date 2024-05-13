<script lang="ts">
	import '$app.css';
	import Analytics from '$lib/analytics.svelte';
</script>

<div class="w-full">
	<Analytics />
	<slot />
</div>
