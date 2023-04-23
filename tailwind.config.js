/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		content: {
			center: true,
			padding: "32px",
		},
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
				dark: "#232323",
				putih: "#f7f7f7",
				text: "#393C43",
			},
			screens: {
				"2xl": "1320px",
			},
		},
		plugins: [],
	},
};
