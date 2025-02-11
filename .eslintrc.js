module.exports = {
    extends: [
      "next/core-web-vitals",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:tailwindcss/recommended"
    ],
    plugins: ["@typescript-eslint", "tailwindcss"],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "tailwindcss/no-custom-classname": "off" // Disable if you use custom class names
    }
  };
  