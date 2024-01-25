const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // Define your API endpoint
  const apiEndpoint = '/api/django_backend';

  // Create a proxy middleware for your API
  const apiProxy = createProxyMiddleware(apiEndpoint, {
    target: 'http://localhost:8000', // Use the service name
    changeOrigin: true,
    headers: {
      'Host': 'djangobackend', // Set the correct service name
    },
    pathRewrite: {
      [`^${apiEndpoint}`]: '',
    },
  });

  // Use the proxy middleware for the API
  app.use(apiEndpoint, apiProxy);
};
