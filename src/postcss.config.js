const tailwindcss = require('tailwindcss');
const purge = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const rucksack = require('rucksack-css');
const cssmodules = require('postcss-modules');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    cssnano({
      preset: 'default',
    }),
    purge({
      content: ['./src/*.html', './src/*.js', './src/js/*.js', './src/js/components/*.js'],
      css: ['./src/scss/tailwind.css', './src/scss/*.scss', './src/scss/components/*.scss'],
      extractors: [
        {
          extractor: class TailwindExtractor {
            static extract(content) {
              return content.match(/[A-z0-9-:\/]+/g) || [];
            }
          },
          extensions: ['css', 'js', 'html']
        }
      ]
    }),
    autoprefixer,
    rucksack
  ],
}