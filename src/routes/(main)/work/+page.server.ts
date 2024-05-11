import type { WorkExperience } from '$types'

export const prerender = true

export async function load() {
  try {
    const response = await fetch('http://localhost:3000/api/work-experiences');
    const jsonResponse = await response.json();
    const workExperiencesList: WorkExperience[] = jsonResponse.data ?? [];

    return { workExperiencesList }
  } catch(e) {
    console.log(e)
  }
}
