// Import rollup plugins
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import minifyHTML from 'rollup-plugin-minify-html-literals'
import summary from 'rollup-plugin-summary'

export default {
  plugins: [
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Minify HTML template literals
    minifyHTML(),
    // Minify JS
    terser({
      ecma: 2020
    }),
    // Print bundle summary
    summary()
  ],
  input: 'src/color-palette-picker.js',
  output: {
    file: 'dist/color-palette-picker.bundle.js',
    name: 'esupColorPalettePicker',
    format: 'umd'
  },
  preserveEntrySignatures: 'strict'
}
