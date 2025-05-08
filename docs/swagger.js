import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Dashboard API',
      version: '1.0.0'
    }
  },
  apis: ['./routes/*.js']
};

export const swaggerSpec = swaggerJsdoc(options);
export const swaggerDocs = swaggerUi.serve;
export const swaggerUiSetup = swaggerUi.setup(swaggerSpec);