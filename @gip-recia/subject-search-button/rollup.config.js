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
  input: 'src/subject-search-button.js',
  output: {
    file: 'dist/subject-search-button.bundle.js',
    name: 'esupSubjectSearchButton',
    format: 'umd'
  },
  preserveEntrySignatures: 'strict'
}
