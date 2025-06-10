import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { caseStudiesData } from './src/data/caseStudiesData.js';

// A custom plugin to handle server-side redirects
const redirectProxyPlugin = () => ({
  name: 'redirect-proxy',
  configureServer(server) {
    server.middlewares.use('/api/redirect', (req, res, next) => {
      // Parse the 'id' from the request URL, e.g., /api/redirect?id=1
      const studyId = new URL(req.url, `http://${req.headers.host}`).searchParams.get('id');

      if (!studyId) {
        res.statusCode = 400;
        res.end('Missing id parameter');
        return;
      }

      // Find the case study with the matching id
      const caseStudy = caseStudiesData.find(study => study.id === studyId);

      if (caseStudy) {
        // If found, issue a 302 redirect to the actual playableLink
        res.statusCode = 302;
        res.setHeader('Location', caseStudy.playableUrl);
        res.end();
      } else {
        // If no case study is found, return a 404
        res.statusCode = 404;
        res.end('Case study not found');
      }
    });
  }
});


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    redirectProxyPlugin() // Add the custom plugin here
  ],
})