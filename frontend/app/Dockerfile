FROM node:20

WORKDIR /app

VOLUME /app/node_modules

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]