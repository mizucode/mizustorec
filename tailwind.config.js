/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			fontFamily: {
				readex: ["Readex Pro"],
			},
			colors: {
				biru: "#1390ff",
				kuning: "#ffd93d",
				abu: "#454545",
			},
			screens: {
				"2xl": "1320px",
			},
		},
		plugins: [],
	},
};
