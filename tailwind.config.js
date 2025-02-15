/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollbarWidth: {
        none: "none",
      },
      screens: {
        xs: "480px", 
        sm: "640px",  
        md: "768px",  
        lg: "1024px", 
        xl: "1280px", 
        "2xl": "1536px",
        "max-xs": { max: "480px" },      
        "max-sm": { max: "640px" },      
        "max-md": { max: "768px" },      
        "max-lg": { max: "1024px" },     
        "max-xl": { max: "1280px" },     
        "max-2xl": { max: "1536px" },
      },
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
        h2: "80px",       
        "h2-xs": "20px",    
        "h2-sm": "30px",    
        "h2-md": "40px",    
        "h2-lg": "50px",
        "h2-2xl": "60px",
        h3: "60px",
        "h3-xs": "10px",
        "h3-sm": "20px",
        "h3-md": "30px",
        "h3-lg": "40px",
        "h3-2xl": "50px",
        button: "30px",
        "button-xs": "20px",
        p: "40px",
        "p-xs": "10px",
        "p-sm": "20px",
        "p-md": "30px",
        "p-lg": "40px",
        tittleCard: "30px",
        "tittleCard-xs": "5px",
        "tittleCard-sm": "10px",
        "tittleCard-md": "15px",
        "tittleCard-lg": "20px",
        "tittleCard-2xl": "25px",
        description: "15px",
        "description-xs": "5px",
        "description-sm": "7px",
        "description-md": "9px",
        "description-lg": "11px",
        "description-2xl": "13px", 
      },
    },
  },
  plugins: [],
}

