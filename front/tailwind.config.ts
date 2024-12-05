import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(dropdown|menu|divider|popover|button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#143F6B',
        'secondary': '#F55353',
        'tertiary': '#FEB139',
        'quaternary': '#F6F54D',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
