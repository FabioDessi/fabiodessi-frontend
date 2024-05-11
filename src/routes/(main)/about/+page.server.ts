import type { AboutSection } from "$types";

/** @type {import('./$types').PageServerLoad} */
export const prerender = true

export async function load() {
  try {
  const response = await fetch('http://localhost:3000/api/about-sections');
  const jsonResponse = await response.json();
  const aboutSectionsList: AboutSection[] = jsonResponse.data;

  return { aboutSectionsList }
  } catch(e) {
    console.log(e)
  }
}
