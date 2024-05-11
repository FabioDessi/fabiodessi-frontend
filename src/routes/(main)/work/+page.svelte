<script lang="ts">
	import ExperienceCard from './components/ExperienceCard.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	const { workExperiencesList } = data;
</script>

<section class="container mx-auto pb-[13rem]">
	<h2 class="font-integralCF text-10xl tracking-wide">expowering</h2>
	<h2 class="font-integralCF text-10xl tracking-wide text-red-700">web experiences</h2>
	<h2 class="font-integralCF text-10xl tracking-wide">with code</h2>
</section>

<section class="flex items-center justify-center pb-[13rem]">
	<div class="container mx-auto px-16">
		<p class="font-robotoSlab text-5xl font-thin tracking-wide text-center leading-[4rem]">
			Ut nec eros eleifend, placerat sapien consequat, dapibus arcu. Morbi in nulla eleifend,
			pharetra libero eu, viverra lacus. Phasellus in est magna. Nunc dui leo, rhoncus quis rhoncus
			pellentesque, sagittis ut velit. Suspendisse ultrices, augue ac convallis blandit, lectus nisl
			interdum tortor, viverra congue turpis felis eu elit.
		</p>
	</div>
</section>

{#if workExperiencesList?.length !== 0}
	<div>
		{#each workExperiencesList as workExperience}
			<ExperienceCard {workExperience} />
		{/each}
	</div>
{:else}
	<p class="text-center text-xl">No work experiences to show.</p>
{/if}
