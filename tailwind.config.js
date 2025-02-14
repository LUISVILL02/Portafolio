/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          secondary: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#ba86ff", 
          dark: "#9f57ff",   
          light: "#FFFFFF",  
        },
        secondary: {
          DEFAULT: "#6412d1",
        },
        background: {
          DEFAULT: "#1b1426", 
          paper: "rgba(0, 0, 0, 0.5)",
          form: "rgba(158, 158, 158, 0.05)",
          oval: "#552D8A"
        },
        inputForm: {
          DEFAULT: "rgba(158, 158, 158, 0.1)",
          border: "rgba(224, 224, 224, 0.1)"
        }
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"], 
      },
      fontSize: {
        h2: "5rem", 
        h3: "60px",
        button: "1.875rem",
        p: "40px",
        tittleCard: "30px",
        description: "15px" 
      },
    },
  },
  plugins: [],
}

