FROM node:18-alpine

USER root
# set the working directory to /app
WORKDIR /app
RUN ls -alt

RUN chgrp -R 0 /app && \
    chmod -R g=u /app

#RUN chown -R 1001:0 .
USER node
RUN chmod 775 /app
COPY package*.json ./
# copy the rest of the files to the working directory
COPY . .
USER root
RUN npm install
USER node
EXPOSE 8080
CMD ["npm", "run","start"]