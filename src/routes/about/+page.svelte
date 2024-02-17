<script>
import { onMount } from 'svelte';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

onMount(() => {
  // Lenis implementation
  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
  gsap.registerPlugin(ScrollTrigger);

  // Horizontal parallax animation
  gsap.utils.toArray('.parallax-text').forEach((text, index) => {
    gsap.to(text, {
      x: () => (index === 0 ? 400 : -400),
      ease: 'none',
      scrollTrigger: {
        trigger: '#parallax-section',
        end: 'bottom top',
        scrub: true,
      }
    });
  });
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
      Experienced Full Stack Engineer with 10 years of comprehensive expertise, specializing in <strong>Frontend development</strong> and with a strong foundation in <strong>Backend development.</strong> Here's a breakdown
    </p>
  </div>
</section>

<section class="pb-[13rem]">
  <div id="parallax-section" class="flex items-center justify-center pb-[13rem]">
    <div>
      <div class="parallax-text block">
        <span class="font-integralCF text-8xl tracking-wide text-red-700 ml-2">Frontend</span>
      </div>
      <div class="parallax-text block">
        <span class="font-integralCF text-8xl tracking-wide">experience</span>
      </div>
    </div>
  </div>

  <div class="container mx-auto">
    <div class="flex mb-36">
      <div class="basis-1/3">
        <h4 class="font-integralCF text-5xl tracking-wide mb-8">WHEN BRANDING TAKES ON ITS FULL MEANING</h4>
      </div>
      <div class="basis-2/3 pl-32">
        <p class="font-robotoSlab font-extralight text-2xl tracking-wide"> 
          It’s no secret, we’ve always been more hoodie than suit-and-tie. More than ever, our new identity reflects who we really are. We took pleasure in turning our back on the corporate to embrace our irreverent style. <strong>After all, our cocky side is part of our personality.</strong>
        </p>
      </div>
    </div>

    <div class="flex items-center">
      <div class="basis-1/3 mb-36">
        <h4 class="font-integralCF text-5xl tracking-wide mb-8">Title</h4>
        <p class="font-robotoSlab font-extralight text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum euismod nisl vel blandit. Aenean convallis augue sit amet lectus tempor, in molestie erat hendrerit.
        </p>
      </div>

      <div class="basis-2/3 pl-32 mb-36 flex justify-between items-center">
        <div class="basis-2/3">
          <h4 class="font-integralCF text-5xl tracking-wide mb-8">Title</h4>
          <p class="font-robotoSlab font-extralight text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum euismod nisl vel blandit. Aenean convallis augue sit amet lectus tempor, in molestie erat hendrerit.
          </p>
        </div>
        <div>
          <div class="icon-placeholder"></div>
        </div>
      </div>
    </div>

    <div class="flex items-center">
      <div class="basis-2/3 pr-32 mb-36 flex justify-between items-center">
        <div>
          <div class="icon-placeholder"></div>
        </div>
        <div class="basis-2/3">
          <h4 class="font-integralCF text-5xl tracking-wide mb-8">Title</h4>
          <p class="font-robotoSlab font-extralight text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum euismod nisl vel blandit. Aenean convallis augue sit amet lectus tempor, in molestie erat hendrerit.
          </p>
        </div>
      </div>
      <div class="basis-1/3 mb-36">
        <h4 class="font-integralCF text-5xl tracking-wide mb-8">Title</h4>
        <p class="font-robotoSlab font-extralight text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum euismod nisl vel blandit. Aenean convallis augue sit amet lectus tempor, in molestie erat hendrerit.
        </p>
      </div>
    </div>
  </div>
</section>

<section>
  <p>
    Experienced Full Stack Engineer with over 8 years of comprehensive expertise, specializing in
    frontend development and adept in PHP, Node.js, JavaScript, and Python. Proven proficiency
    extends beyond WordPress to encompass React, Vue, and Web Components, along with
    state-of-the-art libraries like Redux, React Query, React Hook Form, and Material UI.
    Well-versed in dynamic technologies such as Gatsby and Next.js for static site generation and
    server-side rendering, as well as the backend framework Express.
  </p>
  <p>
    Since 2017, I have delved into Vue.js and React.js for both web and mobile applications,
    consistently augmenting my skills in diverse tech stacks. My toolkit includes SCSS
    pre-processing, JavaScript bundling, linting, and transpiling, orchestrated seamlessly with
    Webpack to produce optimized, fast-loading code compliant with web standards.
  </p>
  <p>
    Equipped with the expertise to implement Microfrontends architecture, I have a strong foundation
    in cloud services and infrastructure, notably AWS and Cognito. Currently, I am actively honing
    my skills in Continuous Integration/Continuous Deployment (CI/CD) and Test-Driven Development
    (TDD) methodologies for efficient management and delivery of large-scale projects.
  </p>
  <p>
    As a forward-thinking Full Stack Engineer, I remain dedicated to staying abreast of industry
    trends and emerging technologies. My commitment to delivering high-quality results, coupled with
    a proactive approach to incorporating cutting-edge tools, positions me as a valuable asset for
    any challenging web development project. Ready to contribute my skills and experience to elevate
    your team's success in this dynamic field.
  </p>
</section>

<style>
.icon-placeholder {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
