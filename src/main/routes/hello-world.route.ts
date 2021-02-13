import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export default (app: FastifyInstance) => {
  app.register(
    (instance: FastifyInstance, opts, done) => {
      instance
        .get(
          '/',
          {
            schema: {
              description: 'Return a simple message.',
              tags: ['hello-world-message'],
              summary: 'qwerty',
              params: {},
            },
            handler: (request: FastifyRequest, reply: FastifyReply) => {
              reply.send({ message: 'Hello, World!' });
            },
          },
        );

      done();
    },
    { prefix: 'v1/api' },
  );
};
