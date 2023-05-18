module.exports = {
  components: {
    categories: [
      {
        name: 'Javascript',
        include: [
          'src/components/javascript/ButtonJS/ButtonJS.js',
          'src/components/javascript/CardJS/CardJS.js',
          'src/components/javascript/CardActionsJS/CardActionsJS.js',
          'src/components/javascript/CardActionAreaJS/CardActionAreaJS.js',
          'src/components/javascript/CardContentJS/CardContentJS.js',
          'src/components/javascript/CardHeaderJS/CardHeaderJS.js',
          'src/components/javascript/CardMediaJS/CardMediaJS.js',
          'src/components/javascript/TypographyJS/TypographyJS.js',
          'src/components/javascript/IconButtonJS/IconButtonJS.js',
        ],
      },
      {
        name: 'Typescript',
        include: ['src/components/typescript/ButtonTS/ButtonTS.tsx'],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.tsx',
    webpackConfig: 'webpack.config.js',
  },
  name: 'uxpin tech onboarding',
};
