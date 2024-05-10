/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  important: true,
  content: ["./src/**/*.{js,jsx,css}"],
  theme: {
    extend: {
      screens: {
        xs: "30rem", // Equivalent to 480px
        sm: "48rem", // Equivalent to 768px
        md: "64rem", // Equivalent to 1024px
        lg: "80rem", // Equivalent to 1280px
        xl: "85.375rem", // Equivalent to 1366px
        xxl: "120rem", // Equivalent to 1920px
      },
      colors: {
        white: {
          900: "#fff",
        },
        black: {
          900: "#000",
        },
        grey: {
          100: "#f5f5f5",
          200: "#BDBDBD",
          300: "#E0E0E0",
          400: "#757575",
          500: "#444444",
        },
        fnp: {
          100: "#F2F3E8",
          200: "#34A83C",
          300: "#737530",
          400: "#4C4D27",
          500: "#191A0B",
        },
        blue: {
          100: "#195EE0",
          200: "#2B65D2",
        },
        red: {
          100: "#D64927",
          200: "#E5962A",
        },
        info: {
          900: "#195EE0",
        },
        success: {
          900: "#29852F",
        },
        error: {
          900: "#D14826",
        },
        warn: {
          900: "#E5962A",
        },
        offer: {
          900: "#008A00",
        },
      },
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        purple: {
          primary: "#5538EE",
          secondary: "#6F9EFF",
        },
        notification: {
          primary: "#F56436",
          secondary: "#EA1E61",
        },
        fire: {
          primary: "#FFE16A",
          secondary: "#FB8F2C",
        },
        tree: {
          primary: "#F8B400",
          secondary: "#7D8035",
        },
      }),
      outlineColor: {
        grey: {
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
        },
      },
      fontSize: {
        10: "0.625rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        24: "1.5rem",
        36: "2.25rem",
      },
      lineHeight: {
        0: "normal",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        30: "1.875rem",
        44: "2.75rem",
      },

      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
      },
      letterSpacing: {
        normal: "-0.0088rem",
        extra: "-0.01rem",
      },
      width: {
        10: "0.625rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
      },
      height: {
        1: "0.063rem",
        10: "0.625rem",
        24: "1.5rem",
        30: "1.875rem",
        32: "2rem",
        35: "2.1875rem",
        38: "3rem",
      },
      borderRadius: {
        4: "0.25rem",
        7: "0.4375rem",
        8: "0.5rem",
      },
      rotate: {
        360: "360deg",
      },
      boxShadow: {
        "smoke-gray": "0 2px 6px rgba(0, 0, 0, 0.2)",
      },
      listStyleType: "normal",
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
