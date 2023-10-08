/** @type {import("prettier").Config} */
module.exports = {
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	useTabs: true,
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: "**/*astro",
			options: {
				parser: "astro",
			},
		},
	],
};
