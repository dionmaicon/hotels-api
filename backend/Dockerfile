FROM node:14.17

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install && npm install -g nodemon && npm install -g migrate-mongoose

COPY . /app

CMD ["nodemon", "/app/src/server.js"]
