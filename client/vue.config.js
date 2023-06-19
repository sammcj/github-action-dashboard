const configureAPI = require('../configure');

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
    config.plugin('html').tap(args => {
      args[0].title = "Action Dashboard"
      return args;
    })
  },
  devServer: {
    before: configureAPI.before,
    // Can't figure out how to connect up socket.io as part of webpack devServer
    //after: configureAPI.after
  },

  transpileDependencies: [
    'vuetify'
  ]
};

// // vue.config.js
// module.exports = {
//   chainWebpack: (config) => {
//     config.resolve.alias.set('vue', '@vue/compat')

//     config.module
//       .rule('vue')
//       .use('vue-loader')
//       .tap((options) => {
//         return {
//           ...options,
//           compilerOptions: {
//             compatConfig: {
//               MODE: 2
//             }
//           }
//         }
//       })
//   }
// }
