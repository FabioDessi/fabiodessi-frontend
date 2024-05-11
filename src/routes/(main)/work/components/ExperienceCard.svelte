<script lang="ts">
	import type { WorkExperience } from '$types';
	import { marked } from 'marked';
	import { createTailwindMarkdownRenderer } from '$utils/markdownRenderer';

	export let workExperience: WorkExperience;

	const renderer = createTailwindMarkdownRenderer();
	marked.setOptions({ renderer });

	const {
		role,
		company,
		type,
		startDateMonth,
		startDateYear,
		endDateMonth,
		endDateYear,
		stillOpen,
		description
	} = workExperience;

	const startDate = `${startDateMonth} ${startDateYear}`;
	const endDate = stillOpen ? 'Still Working' : `${endDateMonth} ${endDateYear}`;
</script>

<section class="pb-[13rem]">
	<div class="container mx-auto">
		<div class="flex-col items-center">
			<div class="mb-8">
				<h3 class="font-integralCF text-5xl tracking-wide text-red-700">{role}</h3>
				<h4 class="font-integralCF text-2xl tracking-wide mb-4">{`@ ${company}`}</h4>
				<h4 class="font-integralCF text-2xl tracking-wide">
					{`${type} ${startDate} | ${endDate}`}
				</h4>
			</div>

			<div class="flex-col">
				<div class="py-2 mb-4">
					{@html marked(description)}
				</div>
			</div>
		</div>
	</div>
</section>
