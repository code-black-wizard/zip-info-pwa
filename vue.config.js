module.exports = {
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://api.zippopotam.us/us/'),
          handler: 'networkFirst',
          options: {
            cacheName: 'api-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  }
};