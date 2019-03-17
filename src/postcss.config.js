const tailwindcss = require('tailwindcss');
const purge = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const rucksack = require('rucksack-css');
const cssmodules = require('postcss-modules');

module.exports = {
  plugins: [
    // tailwindcss('./tailwind.js'),
    cssnano({
      preset: 'default',
    }),
    autoprefixer,
    rucksack
  ],
}