// Import rollup plugins
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import minifyHTML from 'rollup-plugin-minify-html-literals'
import summary from 'rollup-plugin-summary'
import { visualizer } from 'rollup-plugin-visualizer'

export default [
  // Non-minified bundle
  {
    plugins: [
      // Resolve bare module specifiers to relative paths
      resolve(),
      // Print bundle summary
      summary()
    ],
    input: 'src/js-tree.js',
    output: [
      {
        file: 'dist/js-tree.bundle.js',
        name: 'esupJsTree',
        format: 'umd'
      }
    ],
    preserveEntrySignatures: 'strict'
  },
  // Minified bundle
  {
    plugins: [
      // Resolve bare module specifiers to relative paths
      resolve(),
      // Minify HTML template literals
      minifyHTML(),
      // Minify JS
      terser({
        ecma: 2020,
        format: {
          comments: false
        }
      }),
      // Print bundle summary
      summary(),
      // Visualize bundle size
      visualizer({
        filename: 'dist/js-tree.bundle.min-stats.html'
      })
    ],
    input: 'src/js-tree.js',
    output: [
      {
        file: 'dist/js-tree.bundle.min.js',
        name: 'esupJsTree',
        format: 'umd',
        sourcemap: true
      }
    ],
    preserveEntrySignatures: 'strict'
  }
]