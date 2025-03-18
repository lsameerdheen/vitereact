FROM node:18-alpine
USER root
CMD CHMOD -R 777 /app
WORKDIR /app
RUN whoami
COPY package*.json .
COPY *.* .
RUN npm install 
COPY . .
EXPOSE 8080
CMD ["npm", "run","start"]