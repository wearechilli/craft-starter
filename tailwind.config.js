module.exports = {
  mode: 'jit',
  purge: [
    './templates/**/*.{html,twig}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    container: false,
  }
}
