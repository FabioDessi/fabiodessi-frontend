/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				integralCF: ['IntegralCF', 'ui-sans-serif', 'system-ui']
			}
		}
	},
	plugins: [
		function ({ addUtilities, theme }) {
			const newUtilities = {
				'.max-w-xs': {
					maxWidth: theme('maxWidth.xs'),
					'--intro-caption-width': theme('maxWidth.xs')
				}
			};
			addUtilities(newUtilities, ['responsive', 'hover']);
		}
	]
};
