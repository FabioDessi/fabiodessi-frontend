<script lang="ts">
import { onMount } from 'svelte';
import { fade } from 'svelte/transition';
import Section from './components/Section.svelte';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner.svelte';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.svelte';

import type { AboutSection } from '../../types';

let aboutSectionsList: AboutSection[] = []; 
let isLoading = true;
let error: string | null = null;

onMount(async () => {
  try {
    const response = await fetch('http://localhost:3000/api/about-sections');
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const jsonResponse = await response.json();
    aboutSectionsList = jsonResponse.data;
  } catch (e) {
    error = e instanceof Error ? e.message : 'An unexpected error occurred';
  } finally {
    isLoading = false;
  }
});
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

{#if isLoading}
  <LoadingSpinner />
{:else if error}
  <ErrorMessage message={error} />
{:else}
  <div transition:fade>
    {#each aboutSectionsList as section}
      <Section {section} />
    {/each}
  </div>
{/if}
