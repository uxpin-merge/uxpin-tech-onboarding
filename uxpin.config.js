module.exports = {
  components: {
    categories: [
      {
        name: 'Javascript',
        include: ['src/components/javascript/ButtonJS/ButtonJS.js'],
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
