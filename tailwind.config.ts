import type { Config } from "tailwindcss";
import { themeConfig } from "./theme.config";
import { themeResolver } from "@yext/visual-editor";

console.log(themeResolver({}, themeConfig));

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: themeResolver({}, themeConfig),
  },
  plugins: [],
} satisfies Config;
