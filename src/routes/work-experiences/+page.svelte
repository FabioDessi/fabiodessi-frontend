<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import ExperienceCard from '../../components/ExperienceCard/ExperienceCard.svelte';
	import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner.svelte';
	import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.svelte';
	import type { WorkExperience } from '../../types';

	let workExperiencesList: WorkExperience[] = [];
	let isLoading = true;
	let error: string | null = null;

	onMount(async () => {
		try {
			const response = await fetch('http://localhost:3000/api/work-experiences');
			if (!response.ok) {
				throw new Error('Failed to fetch');
			}
			const jsonResponse = await response.json();
			workExperiencesList = jsonResponse.data;
		} catch (e) {
			error = e instanceof Error ? e.message : 'An unexpected error occurred';
		} finally {
			isLoading = false;
		}
	});
</script>

<h4 class="section-title text-l uppercase font-bold pl-40">Work Experiences</h4>
<div class="flex-col space-y-4 items-center py-8">
	<h1 class="text-8xl uppercase">Empowering</h1>
	<h1 class="text-8xl uppercase text-center">web experiences</h1>
	<h1 class="text-8xl uppercase text-right">with code</h1>
</div>

<h4 class="section-title text-l uppercase font-bold pl-40">Introduction</h4>
<div class="w-3/4 flex-col space-y-4 mx-auto py-8">
	<p class="text-2xl">
		Ut nec eros eleifend, placerat sapien consequat, dapibus arcu. Morbi in nulla eleifend, pharetra
		libero eu, viverra lacus. Phasellus in est magna. Nunc dui leo, rhoncus quis rhoncus
		pellentesque, sagittis ut velit. Suspendisse ultrices, augue ac convallis blandit, lectus nisl
		interdum tortor, viverra congue turpis felis eu elit. Curabitur cursus, ligula in aliquam
		bibendum, tortor sapien luctus elit, sed blandit nisi metus sed velit. Ut sollicitudin posuere
		viverra. Etiam nec tortor eu ex viverra pulvinar. Vestibulum rutrum metus a magna elementum
		laoreet. Praesent viverra sollicitudin odio, a consectetur eros. Quisque viverra pellentesque
		velit, id congue nunc finibus ut. Nulla vestibulum fermentum leo id dictum.
	</p>
</div>

<h4 class="section-title text-l uppercase font-bold pl-40">Experiences</h4>

{#if isLoading}
	<LoadingSpinner />
{:else if error}
	<ErrorMessage message={error} />
{:else if workExperiencesList.length === 0}
	<p class="text-center text-xl">No work experiences to show.</p>
{:else}
	<div transition:fade>
		{#each workExperiencesList as workExperience}
			<ExperienceCard {workExperience} />
		{/each}
	</div>
{/if}

<style>
	.section-title::before,
	.section-title::after {
		content: '•';
		display: inline-block;
		margin: 0 0.5rem;
		color: #333;
	}
</style>
