import { defineConfig } from 'vitest/config';

export default defineConfig(() => {
  return {
    test: {
      globals: true,
      singleThread: true,
      environment: 'node',
    },
  };
});
