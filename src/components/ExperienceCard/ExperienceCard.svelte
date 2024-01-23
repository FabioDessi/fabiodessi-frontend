<script lang="ts">
	import type { WorkExperience } from '../../types';
	import { marked } from 'marked';
	import createTailwindMarkdownRenderer from '../../utils/markdownRenderer';

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

<div
	class="flex-col items-center bg-grey-00 border-2 border-green-800 rounded shadow my-8 p-8 text-xl"
>
	<div class="mb-4">
		<h3 class="mb-2 text-3xl">{`${role} @ ${company}`}</h3>
		<h4 class="mb-2 text-2xl">
			{`${startDate} | ${endDate}`}
		</h4>
		<h4 class="mb-2 text-2xl">{type}</h4>
	</div>

	<div class="flex-col">
		<div class="py-2 mb-4">
			{@html marked(description)}
		</div>
	</div>
</div>
