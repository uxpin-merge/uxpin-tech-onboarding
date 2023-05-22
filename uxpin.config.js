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
          'src/components/javascript/IconJS/IconJS.js',
          'src/components/javascript/DialogJS/DialogJS.js',
          'src/components/javascript/DialogActionsJS/DialogActionsJS.js',
          'src/components/javascript/DialogContentJS/DialogContentJS.js',
          'src/components/javascript/DialogContentTextJS/DialogContentTextJS.js',
          'src/components/javascript/DialogTitleJS/DialogTitleJS.js',
        ],
      },
      {
        name: 'Typescript',
        include: [
          'src/components/typescript/ButtonTS/ButtonTS.tsx',
          'src/components/typescript/CardActionAreaTS/CardActionAreaTS.tsx',
          'src/components/typescript/CardActionsTS/CardActionsTS.tsx',
          'src/components/typescript/CardContentTS/CardContentTS.tsx',
          'src/components/typescript/CardHeaderTS/CardHeaderTS.tsx',
          'src/components/typescript/CardTS/CardTS.tsx',
          'src/components/typescript/CardMediaTS/CardMediaTS.tsx',
          'src/components/typescript/IconButtonTS/IconButtonTS.tsx',
          'src/components/typescript/IconTS/IconTS.tsx',
          'src/components/typescript/TypographyTS/TypographyTS.tsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.tsx',
    webpackConfig: 'webpack.config.js',
  },
  name: 'uxpin tech onboarding',
};
