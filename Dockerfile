FROM node:20.17.0

EXPOSE 3000

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm","run", "start:dev"]
