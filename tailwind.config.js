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
        sm: "640px",  
        md: "768px",  
        lg: "1024px", 
        xl: "1280px", 
        "2xl": "1536px",
        "3xl": "1920px",
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
        "h2-xs": "5px",    
        "h2-sm": "10px",    
        "h2-md": "20px",    
        "h2-lg": "40px",
        "h2-xl": "50px",
        "h2-2xl": "60px",
        h3: "60px",
        "h3-xs": "10px",
        "h3-sm": "20px",
        "h3-md": "30px",
        "h3-lg": "35px",
        "h3-xl": "40px",
        "h3-2xl": "50px",
        button: "30px",
        "button-xs": "4px",
        "button-sm": "6px",
        "button-md": "10px",
        "button-lg": "14px",
        "button-xl": "16px",
        "button-2xl": "20px",
        p: "40px",
        "p-xs": "2px",
        "p-sm": "5px",
        "p-md": "10px",        
        "p-lg": "15px",
        "p-xl": "20px",
        "p-2xl": "25px",
        tittleCard: "30px",
        "tittleCard-xs": "5px",
        "tittleCard-sm": "10px",
        "tittleCard-md": "15px",
        "tittleCard-lg": "20px",
        "tittleCard-xl": "22px",
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

