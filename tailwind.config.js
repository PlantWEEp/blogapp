export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      content: {
        'blob': 'url("./assets/blob.png")',
        'arrowUpIcon': 'url("../src/arrow-up-icon.svg")',
      },
      // Customizing font sizes
      fontSize: {
        "heading-lg": "64px",    // Large heading size
        "custom-h1": "64px",     // Custom H1 size
        "custom-h2": "56px",     // Custom H2 size
        "custom-h3": "48px",     // Custom H3 size
        "custom-h4": "32px",     // Custom H4 size
        "custom-h5": "24px",     // Custom H5 size
        "custom-h6": "20px",     // Custom H6 size
        "custom-p": "14px",      // Custom paragraph size
        "links-p": "18px",       // Font size for links in paragraphs
      },
      // Customizing text colors
      textColor: {
        skin: {
          textblack: "var( --background-color-base)",
          textwhite: "var(--color-white)",
        },
      },
      // Customizing background colors
      backgroundColor: {
        skin: {
          base: "var(--background-color-base)", // Base background color
          hover: "var(--hover-color)",          // Background color on hover
          greybg: "var(--base-bg-color)",       // Grey background color
          whitecolor: "var(--color-white)",
          yellowcolor: "var(--yellow-bg)",
<<<<<<< HEAD
          danger:"var(--danger)",
          primary:"(--primary-color)"
=======
>>>>>>> d4edc0ff1d0a9c34831bbf5aa09b51fe6842eff7
        },
      },
    },
    // Defining custom screen breakpoints
    screens: {
      "2xl": { max: "1400px" }, // Custom 2xl screen size
      xl: { max: "1279px" },     // Extra large screen size
      lg: { max: "999px" },      // Large screen size
      md: { max: "767px" },      // Medium screen size
      sm: { max: "639px" },      // Small screen size
      ssm: { max: "499px" },     // Extra small screen size
    },
  },
  plugins: [],
};
