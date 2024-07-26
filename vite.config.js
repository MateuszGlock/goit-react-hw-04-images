import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: "/goit-react-hw-04-images/",
=======
  base: "/react-playground/",
>>>>>>> c94ef5cbe0dd7e21fae81d1ff7216aeaa810bb09
  build: {
    outDir: "./dist",
  },
});
