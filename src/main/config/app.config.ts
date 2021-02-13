import fastify from 'fastify';
import setupRoutes from './route.config';
import setupSwagger from './documentation.config';

const app = fastify({ logger: true });

setupRoutes(app);
setupSwagger(app);

export default app;
