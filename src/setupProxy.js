const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  console.log("Proxy:",proxy);
  app.use(
    proxy('/api/users', { 
      target: 'http://localhost:5555',
      changeOrigin: true,
      logLevel: "debug" }
    ),
    proxy('/api/posts', { 
      target: 'http://localhost:4444',
      changeOrigin: true,
      logLevel: "debug" }
    ),
    proxy('/api/profile', { 
      target: 'http://localhost:4444',
      changeOrigin: true,
      logLevel: "debug" }
    ),
    proxy('/io', { 
      target: 'http://localhost:3456',
      changeOrigin: true,
      logLevel: "debug" }
    )
  );

};