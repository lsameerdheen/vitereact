FROM node:18-alpine

USER root
# set the working directory to /app
WORKDIR /app

RUN chgrp -R 0 /app && \
    chmod -R g=u /app

#RUN chown -R 1001:0 .

COPY package*.json ./
# copy the rest of the files to the working directory
COPY . .

RUN npm install
RUN apk update
RUN apk sudo
RUN chmod 777 /app
RUN chown -R node:node /app/node_modules
USER node
EXPOSE 8080
CMD ["npm", "run","start"]