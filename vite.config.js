import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// for .env file usage through VITE
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
