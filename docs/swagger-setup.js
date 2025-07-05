import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import schemas from './components/schemas.js'
import securitySchemes from './components/security.js'
import responses from './components/response.js'

import authPaths from './paths/auth.js'
import urlPaths from './paths/url.js'


export default (app, port) => { // Adicione o parâmetro 'port'
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'URL Shortener API',
        version: '1.0.0',
        description: 'API para encurtamento de URLs com autenticação JWT'
      },
      servers: [{ 
        url: `http://localhost:${port}`, // Use o parâmetro aqui
        description: 'Servidor de Desenvolvimento' 
      }],
      components: {
        schemas,
        securitySchemes,
        responses
      },
      paths: {
        ...authPaths,
        ...urlPaths
      }
    },
    apis: [
      path.resolve(__dirname, '../../routes/auth-route.js'),
      path.resolve(__dirname, '../../routes/url-route.js')
    ],
  };

  const swaggerSpec = swaggerJSDoc(options);

  app.use('/api-docs', swaggerUi.serve);
  app.get('/api-docs', swaggerUi.setup(swaggerSpec));

  app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};