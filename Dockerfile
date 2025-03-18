FROM node:18-alpine

WORKDIR /

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "dev" ]