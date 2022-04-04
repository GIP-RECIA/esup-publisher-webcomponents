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
    input: 'src/color-palette-picker.js',
    output: [
      {
        file: 'dist/color-palette-picker.bundle.js',
        name: 'esupColorPalettePicker',
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
        filename: 'dist/color-palette-picker.bundle.min-stats.html'
      })
    ],
    input: 'src/color-palette-picker.js',
    output: [
      {
        file: 'dist/color-palette-picker.bundle.min.js',
        name: 'esupColorPalettePicker',
        format: 'umd'
      }
    ],
    preserveEntrySignatures: 'strict'
  }
]
