/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "clr-primary-1": "#FFF7ED",
        "clr-promary-2": "#4D4D4D",
      },
      button: {
        btn: "bg-[#161616] text-white font-bold cursor-pointer transition-transform duration-100 ease-in-out	 inline-block text-center no-underline	border-none	py-3	px-[1.375rem] rounded-[10px]",
      },
    },
  },
  plugins: [],
};
