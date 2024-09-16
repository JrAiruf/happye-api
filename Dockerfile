FROM node:20.17.0

EXPOSE 3000

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["npm","run", "start"]
