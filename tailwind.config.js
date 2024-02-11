export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      fontFamily: {
        body: ['DM Sans'],
      },
      //keyframes
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      content: {
        'blob': 'url("./assets/blob.png")',
        'arrowUpIcon': 'url("../src/arrow-up-icon.svg")',
      },
      // Customizing font sizes
      fontSize: { 
        "custom-h1": "64px",      
        "custom-h2": "56px",     
        "custom-h3": "48px",      
        "custom-h4": "32px",      
        "custom-h5": "24px",     
        "custom-h6": "20px",     
        "custom-p": "14px",       
        "links-p": "18px",        
      },
      // Customizing text colors
      textColor: {
        skin: {
          textblack: "var( --background-color-base)",
          textBase: "var(--color-black)",
          grey:"var(--grey)", 
          primary:"var(--primary-color)",
          white:"var(--white)"
        },
      },
      // Customizing background colors
      backgroundColor: {
        skin: {
          base: "var(--background-color-base)",   
          secondary: "var(--secondary-bg)",   
          grey:"var(--grey)",      
          whitecolor: "var(--color-white)",
          yellowcolor: "var(--yellow-bg)",
          danger:"var(--danger)",
          green:"var(--primary-color)",
          good:"var(--good-bg)",
          bad:"var(--bad-bg)",
          average:"var(--average-bg)",
          transparent:"var(--transparent-bg)",
        },
      },
    },
    // Defining custom screen breakpoints
    screens: {
      "2xl": { max: "1400px" },  
      xl: { max: "1279px" },      
      lg: { max: "999px" },       
      md: { max: "767px" },       
      sm: { max: "639px" },       
      ssm: { max: "499px" },      
    },
  },
  plugins: [],
};
