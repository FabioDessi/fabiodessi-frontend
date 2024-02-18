<script lang="ts">
import { onMount } from "svelte";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { marked } from "marked";
import { aboutIntroRenderer, aboutBlocksRenderer } from "../../../utils/markdownRenderer";

import type { Section } from "../../../types";

let parallaxSection: HTMLDivElement; 
let parallaxTextFirst: HTMLDivElement;
let parallaxTextsecond: HTMLDivElement;

export let section: Section;
const { title: { firstLine, secondLine }, intro: { title, content }, blocks } = section;

onMount(() => {
  // Lenis implementation
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
  gsap.registerPlugin(ScrollTrigger);

  // Horizontal parallax animation
  gsap.utils.toArray([parallaxTextFirst, parallaxTextsecond]).forEach((text, index) => {
    gsap.to(text, {
      x: () => (index === 0 ? 400 : -400),
      ease: "none",
      scrollTrigger: {
        trigger: parallaxSection,
        end: "bottom top",
        scrub: true,
      },
    });
  });
});
</script>

<section class="pb-[13rem]">
  <div bind:this={parallaxSection} class="flex items-center justify-center pb-[13rem]">
    <div>
      <div bind:this={parallaxTextFirst} class="parallax-text block">
        <span class="font-integralCF text-8xl tracking-wide text-red-700 ml-2">{firstLine}</span>
      </div>
      <div bind:this={parallaxTextsecond} class="parallax-text block">
        <span class="font-integralCF text-8xl tracking-wide">{secondLine}</span>
      </div>
    </div>
  </div>

  <div class="container mx-auto">
    <div class="flex mb-36">
      <div class="basis-1/3">
        <h4 class="font-integralCF text-5xl tracking-wide mb-8">{title}</h4>
      </div>
      <div class="basis-2/3 pl-32">
        <p class="font-robotoSlab font-extralight text-2xl tracking-wide">{@html marked(content, { renderer: aboutIntroRenderer() })}</p>
      </div>
    </div>

    <div class="flex flex-row flex-wrap">
      {#each blocks as { title, content }, i (title)}
        {#if Math.floor(i/2) % 2 === 0}
          {#if i % 2 === 0}
            <div class="basis-1/3 mb-36">
              <h4 class="font-integralCF text-5xl tracking-wide mb-8">{title}</h4>
              <p class="font-robotoSlab font-extralight text-lg">{@html marked(content, { renderer: aboutBlocksRenderer() })}</p>
            </div>
          {:else}
            <div class="basis-2/3 pl-32 mb-36 flex justify-between items-center">
              <div class="basis-2/3"> 
                <h4 class="font-integralCF text-5xl tracking-wide mb-8">{title}</h4>
                <p class="font-robotoSlab font-extralight text-lg">{content}</p>
              </div>
              <div>
                <div class="icon-placeholder"></div>
              </div>
            </div>
          {/if}
        {:else}
          {#if i % 2 === 0}
            <div class="basis-2/3 pr-32 mb-36 flex justify-between items-center">
              <div>
                <div class="icon-placeholder"></div>
              </div>
              <div class="basis-2/3"> 
                <h4 class="font-integralCF text-5xl tracking-wide mb-8">{title}</h4>
                <p class="font-robotoSlab font-extralight text-lg">{content}</p>
              </div>
            </div>
          {:else}
            <div class="basis-1/3 mb-36">
              <h4 class="font-integralCF text-5xl tracking-wide mb-8">{title}</h4>
              <p class="font-robotoSlab font-extralight text-lg">{content}</p>
            </div>
          {/if}
        {/if}
      {/each}
    </div>
</section>

<style>
.icon-placeholder {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
