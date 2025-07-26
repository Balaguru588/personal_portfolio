import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/personal_portfolio/',  // ← This MUST match your GitHub repo name
  plugins: [react()],
})
