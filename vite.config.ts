import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@layouts': path.resolve(__dirname, './src/common/layouts'),
      types: path.resolve(__dirname, './src/common/types'),
      '@components': path.resolve(__dirname, './src/common/components'),
      '@elements': path.resolve(__dirname, './src/common/components/elements'),
    },
  },
});
