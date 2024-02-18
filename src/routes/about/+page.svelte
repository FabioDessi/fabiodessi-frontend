<script lang="ts">
import AboutSection from './components/AboutSection.svelte';

import type { Section } from '../../types';

const frontendSection: Section = {
  title: {
    firstLine: "Frontend",
    secondLine: "Experience",
  },
  intro: {
    title: "when branding takes on its full meaning",
    content: "It’s no secret, we’ve always been more hoodie than suit-and-tie. More than ever, our new identity reflects who we really are. We took pleasure in turning our back on the corporate to embrace our irreverent style. <strong>After all, our cocky side is part of our personality.</strong>",
  },
  blocks: [
    { title: "Title 1",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum euismod nisl vel blandit. Aenean convallis augue sit amet lectus tempor, in molestie erat hendrerit.", 
    },
    { title: "Title 2",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum euismod nisl vel blandit. Aenean convallis augue sit amet lectus tempor, in molestie erat hendrerit.", 
    },
    { title: "Title 3",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum euismod nisl vel blandit. Aenean convallis augue sit amet lectus tempor, in molestie erat hendrerit.", 
    },
    { title: "Title 4",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum euismod nisl vel blandit. Aenean convallis augue sit amet lectus tempor, in molestie erat hendrerit.", 
    },
    { title: "Title 5",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum euismod nisl vel blandit. Aenean convallis augue sit amet lectus tempor, in molestie erat hendrerit.", 
    },
    { title: "Title 6",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum euismod nisl vel blandit. Aenean convallis augue sit amet lectus tempor, in molestie erat hendrerit.", 
    },
    { title: "Title 7",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum euismod nisl vel blandit. Aenean convallis augue sit amet lectus tempor, in molestie erat hendrerit.", 
    },
    { title: "Title 8",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum euismod nisl vel blandit. Aenean convallis augue sit amet lectus tempor, in molestie erat hendrerit.", 
    },
  ], 
};

const backendSection: Section = {
  title: {
    firstLine: "Backend",
    secondLine: "Experience",
  },
  intro: {
    title: "when branding takes on its full meaning",
    content: "It’s no secret, we’ve always been more hoodie than suit-and-tie. More than ever, our new identity reflects who we really are. We took pleasure in turning our back on the corporate to embrace our irreverent style. <strong>After all, our cocky side is part of our personality.</strong>",  
  },
  blocks: [
    { title: "Title 1",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum euismod nisl vel blandit. Aenean convallis augue sit amet lectus tempor, in molestie erat hendrerit.", 
    },
    { title: "Title 2",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum euismod nisl vel blandit. Aenean convallis augue sit amet lectus tempor, in molestie erat hendrerit.", 
    },
    { title: "Title 3",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum euismod nisl vel blandit. Aenean convallis augue sit amet lectus tempor, in molestie erat hendrerit.", 
    },
    { title: "Title 4",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum euismod nisl vel blandit. Aenean convallis augue sit amet lectus tempor, in molestie erat hendrerit.", 
    },
  ],
};
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


<AboutSection section={frontendSection} />
<AboutSection section={backendSection} />
