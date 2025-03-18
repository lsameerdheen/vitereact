FROM node:18-alpine
WORKDIR .
RUN npm install
EXPOSE 8080
CMD [ "npm", "run", "preview" ]