FROM node:18-alpine
# set the working directory to /app
WORKDIR /app
#When building Docker images for OpenShift, ensure that directories and files that the container processes need to access have their group ownership set to the root group (0) and are read/writable by that group. 
#Example:
#You can use chgrp -R 0 /some/directory and chmod -R g=u /some/directory in your Dockerfile to set the group ownership and permissions accordingly. 
RUN chgrp -R 0 /app && \
    chmod -R g=u /app

RUN chown -R 1000:0 /app

COPY package*.json ./
# copy the rest of the files to the working directory
COPY . .

RUN npm install

EXPOSE 8080
CMD ["npm", "run","start"]