FROM node

WORKDIR ./

COPY ./src ./src

COPY package*.json ./

COPY tsconfig*.json ./

COPY gulpfile.ts ./

RUN yarn install

RUN yarn run build

EXPOSE 3000

CMD ["node", "./dist/src/server.js"]
