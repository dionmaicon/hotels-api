FROM node:20-alpine

WORKDIR /app

COPY . /app

RUN npm install -g nodemon
RUN npm install 

CMD ["node", "./src/server.js"]
