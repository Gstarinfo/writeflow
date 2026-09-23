import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, 'src/popup.html'),
        content: path.resolve(__dirname, 'src/content.ts'),
        background: path.resolve(__dirname, 'src/background.ts')
      },
      output: {
        entryFileNames: 'src/[name].js'
      }
    }
  },
  resolve: {
    alias: {
      '@writeflow/document-model': path.resolve(__dirname, '../../packages/document-model/src'),
      '@writeflow/suggestion-system': path.resolve(__dirname, '../../packages/suggestion-system/src'),
      '@writeflow/grammar-engine': path.resolve(__dirname, '../../packages/grammar-engine/src'),
      '@writeflow/synonym-engine': path.resolve(__dirname, '../../packages/synonym-engine/src'),
      '@writeflow/writing-core': path.resolve(__dirname, '../../packages/writing-core/src'),
      '@writeflow/editor': path.resolve(__dirname, '../../packages/editor/src'),
      '@writeflow/browser-adapters': path.resolve(__dirname, '../../packages/browser-adapters/src'),
      '@writeflow/engine-nlprule': path.resolve(__dirname, '../../engines/nlprule/src'),
      '@writeflow/engine-wordnet': path.resolve(__dirname, '../../engines/wordnet/src'),
      '@writeflow/data-wordnet': path.resolve(__dirname, '../../data/wordnet')
    }
  }
});
