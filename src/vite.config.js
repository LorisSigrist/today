import { defineConfig } from 'vite'
import { injectDate } from './inject_date'

export default defineConfig({
    plugins: [injectDate()]
})