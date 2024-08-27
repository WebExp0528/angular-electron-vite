import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import angular from '@analogjs/vite-plugin-angular'
import checker from 'vite-plugin-checker'

export default defineConfig({
  main: {
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'electron/main/index.ts')
        },
        watch: {
          include: 'electron/main/**'
        }
      }
    },
    plugins: [
      externalizeDepsPlugin(),
      checker({
        eslint: {
          // for example, lint .ts and .tsx
          lintCommand: 'eslint "./electron/main/**/*.{ts}"'
        }
      })
    ]
  },
  preload: {
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'electron/preload/index.ts')
        },
        watch: {
          include: 'electron/preload/**'
        }
      }
    },
    plugins: [
      externalizeDepsPlugin(),
      checker({
        eslint: {
          // for example, lint .ts and .tsx
          lintCommand: 'eslint "./electron/preload/**/*.{ts}"'
        }
      })
    ]
  },
  renderer: {
    root: '.',
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'index.html')
        }
      }
    },
    resolve: {
      mainFields: ['module']
    },
    plugins: [
      angular(),
      checker({
        eslint: {
          // for example, lint .ts and .tsx
          lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
        }
      })
    ]
  }
})
