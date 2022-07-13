import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app){
  app.use(
      createProxyMiddleware('/api', {
          target: 'http://localhost:8000/api',
          changeOrigin: true
      })
  )
};