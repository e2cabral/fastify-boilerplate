import swagger from 'fastify-swagger';
import { FastifyInstance } from 'fastify';
import Options from './swagger.config';

export default (app: FastifyInstance): void => {
  app.register(swagger, Options);
};
