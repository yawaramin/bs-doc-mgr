import node_resolve from 'rollup-plugin-node-resolve';

export default {
    entry: './lib/es6/src/index.js',
    format: 'iife',
    dest: './release/bundle.js',
    plugins: [node_resolve({module: true, browser: true})],
    moduleName: 'index'
}