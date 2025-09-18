import type { UserConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default {
	plugins: [
		basicSsl(),
	],
	esbuild: {
		jsxSideEffects: true,
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
} satisfies UserConfig;
