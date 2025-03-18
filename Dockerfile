FROM node:18-alpine
CMD ls -alt
WORKDIR ./
RUN npm install
EXPOSE 8080
CMD [ "npm", "run", "preview" ]