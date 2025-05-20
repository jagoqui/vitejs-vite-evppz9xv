import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, 'enviroments'));

  return {
    plugins: [react()],
    define: {
      'process.env': env,
    },
  };
});
