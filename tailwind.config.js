module.exports = {
    content: {
      relative: true,
      files: [
        '*.html',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'base': 'var(--color-primary)',
        'surface0': 'var(--color-secondary)',
      },
      textColor: {
        'text': 'var(--color-text)',
        'subtext0': 'var(--color-subtext)',
        'subtext1': 'var(--color-accent)',
      },
      borderColor: {
        'accent': 'var(--color-accent)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
 }
}