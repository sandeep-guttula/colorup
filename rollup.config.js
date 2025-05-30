import typescript from 'rollup-plugin-typescript2';
import { dts } from 'rollup-plugin-dts';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
];

const plugins = [
    typescript({
        typescript: require('typescript'),
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
            exclude: ['**/*.test.ts', '**/*.spec.ts', 'dist']
        }
    })
];

export default [
    // ES Module build
    {
        input: 'src/index.ts',
        output: {
            file: pkg.module,
            format: 'esm',
            sourcemap: true
        },
        external,
        plugins
    },
    // CommonJS build
    {
        input: 'src/index.ts',
        output: {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
            exports: 'named'
        },
        external,
        plugins
    },
    // Type definitions bundle
    {
        input: 'src/index.ts',
        output: {
            file: pkg.types,
            format: 'esm'
        },
        plugins: [dts()]
    }
];