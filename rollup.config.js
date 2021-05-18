import tsPlugin from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs' },
  ],
	plugins: [
    tsPlugin(),
    external(),
    del({ targets: ['dist/*'] }),
    commonjs({
      include: [
        "node_modules",
        "node_modules/**",
        "node_modules/**/*"
      ],
      namedExports: '*',
    }),
  ],
  external: [
      ...Object.keys(pkg.peerDependencies || {}),
      'class-validator',
      'class-transformer'
  ],
};
