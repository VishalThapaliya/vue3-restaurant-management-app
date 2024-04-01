const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/vue3-restaurant-management-app/' : '/',
  transpileDependencies: true
})
