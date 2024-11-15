import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import yaml from 'js-yaml';
import { Express } from 'express';
import { JsonObject } from 'swagger-ui-express';

function setupSwagger(app: Express) {
  const swaggerDocument = yaml.load(
    fs.readFileSync('./swagger.yml', 'utf8'),
  ) as JsonObject;
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

export { setupSwagger };
