FROM node

WORKDIR /developer/nodejs/node-bind-project

COPY . .

RUN npm ci

ENV PORT=3000


CMD ["npm","start"]
