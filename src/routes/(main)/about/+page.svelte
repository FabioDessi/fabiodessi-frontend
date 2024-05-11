<script lang="ts">
	import Section from './components/Section.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	const { aboutSectionsList } = data;
</script>

<section class="container mx-auto pb-[13rem]">
	<h2 class="font-integralCF text-10xl tracking-wide">Surfer</h2>
	<h2 class="font-integralCF text-10xl tracking-wide text-red-700">Web enthusiast</h2>
	<h2 class="font-integralCF text-10xl tracking-wide">Reader</h2>
</section>

<section class="flex items-center justify-center pb-[13rem]">
	<div class="container mx-auto px-16">
		<p class="font-robotoSlab text-5xl font-thin tracking-wide text-center leading-[4rem]">
			Experienced Full Stack Engineer with 10 years of comprehensive expertise, specializing in <strong
				>Frontend development</strong
			>
			and with a strong foundation in <strong>Backend development.</strong> Here's a breakdown
		</p>
	</div>
</section>

{#if aboutSectionsList?.length !== 0}
	<div>
		{#each aboutSectionsList as section}
			<Section {section} />
		{/each}
	</div>
{:else}
	<p class="text-center text-xl">No about section to show.</p>
{/if}
