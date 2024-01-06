/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'xl': '0 0px 8px 3px rgb(0 0 0 / 0.25)',
				'2xl': '0 0px 22px 15px rgb(0 0 0 / 0.25)',
				'4xl': '0 0px 40px 20px rgb(0 0 0 / 0.25)',
			},
			borderRadius: {
				'2xl': '1.5rem',
			},
		},

	},
	plugins: [
		require("@tailwindcss/typography"),
		require("daisyui")],
	daisyui: {
		themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		base: true,
		styled: true,
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}