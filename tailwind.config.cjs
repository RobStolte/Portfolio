/** @type {import('tailwindcss').Config} */
module.exports = {
	plugins: [
		require("@tailwindcss/typography"),
		require("daisyui")
	],
	content: ['src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors : {
			rst__primary		: 'rgba(var(--color__primary) / <alpha-value>)',
			rst__secondary		: 'rgba(var(--color__secondary) / <alpha-value>)',
			rst__accent			: 'rgba(var(--color__accent) / <alpha-value>)',
			rst__base			: 'rgba(var(--color__base) / <alpha-value>)',
			stolte__primary		: 'rgba(var(--color__stolte-primary) / <alpha-value>)',
			stolte__secondary	: 'rgba(var(--color__stolte-secondary) / <alpha-value>)',
			stolte__accent		: 'rgba(var(--color__stolte-accent) / <alpha-value>)',
			stolte__tertiary	: 'rgba(var(--color__stolte-tertiary) / <alpha-value>)',
		},
		extend: {
			boxShadow: {
				'xl'			: '0 0px 8px 3px rgb(0 0 0 / 0.25)',
				'2xl'			: '0 0px 22px 15px rgb(0 0 0 / 0.25)',
				'4xl'			: '0 0px 40px 20px rgb(0 0 0 / 0.25)',
			},
			borderRadius: {
				'2xl'			: '1.5rem',
			},
		},
	},

	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['[data-theme=light]'],
					'--color__primary'         : '32 22 59',
					'--color__secondary'       : '226 202 202',
					'--color__accent'          : '244 248 18',
					'--color__base'            : '244 244 244',
					'--color__stolte-primary'  : '166 80 91',
					'--color__stolte-secondary': '221 197 173',
					'--color__stolte-accent'   : '218 160 173',
				},
				dark: {
					...require('daisyui/src/theming/themes')['[data-theme=dark]'],
					'--color__primary'         : '32 22 59',
					'--color__secondary'       : '226 202 202',
					'--color__accent'          : '244 248 18',
					'--color__base'            : '29 29 29',
					'--color__stolte-primary'  : '166 80 91',
					'--color__stolte-secondary': '221 197 173',
					'--color__stolte-accent'   : '29 29 29',
				},
			},
		],
		 // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		lightTheme: "light", // name of the first theme to show up, here we use the first theme as example
		darkTheme: "dark", // name of one of the included themes for dark mode
		base: true,
		styled: true,
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}