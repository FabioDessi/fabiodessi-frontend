<script lang="ts">
	export let message: string;
</script>

<div
	class="py-4 px-6 bg-red-100 border border-red-400 text-red-700 my-3 rounded relative"
	role="alert"
>
	<strong class="font-bold">Error! </strong>
	<span class="block sm:inline">{message}</span>
</div>
