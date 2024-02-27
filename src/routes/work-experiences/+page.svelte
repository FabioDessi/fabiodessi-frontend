<script lang="ts">
import { onMount } from 'svelte';
import { fade } from 'svelte/transition';
import ExperienceCard from './components/ExperienceCard.svelte';
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

<section class="container mx-auto pb-[13rem]">
  <h2 class="font-integralCF text-10xl tracking-wide">expowering</h2>
  <h2 class="font-integralCF text-10xl tracking-wide text-red-700">web experiences</h2>
  <h2 class="font-integralCF text-10xl tracking-wide">with code</h2>
</section>

<section class="flex items-center justify-center pb-[13rem]">
  <div class="container mx-auto px-16">
    <p class="font-robotoSlab text-5xl font-thin tracking-wide text-center leading-[4rem]">
      Ut nec eros eleifend, placerat sapien consequat, dapibus arcu. Morbi in nulla eleifend, pharetra
      libero eu, viverra lacus. Phasellus in est magna. Nunc dui leo, rhoncus quis rhoncus
      pellentesque, sagittis ut velit. Suspendisse ultrices, augue ac convallis blandit, lectus nisl
      interdum tortor, viverra congue turpis felis eu elit.</p>
  </div>
</section>

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
