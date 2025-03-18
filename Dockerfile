FROM node:18-alpine

USER root
RUN npm install
# set the working directory to /app
WORKDIR /app
RUN chgrp -R 0 /app && \
    chmod -R g=u /app
USER 1001

#RUN chown -R 1001:0 .
RUN chmod 775 /app
COPY package*.json ./
# copy the rest of the files to the working directory
COPY . .
EXPOSE 8080
CMD ["npm", "run","start"]