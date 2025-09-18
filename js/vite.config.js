import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		basicSsl(),
	],
	esbuild: {
		jsxSideEffects: true,
		jsx: 'automatic',
		jsxImportSource: '@xylem-js/jsx',
	},
	build: {
		minify: false,
		rollupOptions: {
			output: {
				preserveModules: true,
				assetFileNames: "[name][extname]",
				entryFileNames: "[name].js",
			},
			preserveEntrySignatures: 'strict',
		},
	},
});
