FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV development

COPY package.json package-lock.json ./
RUN npm i -s

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

CMD ["npm", "start"]
