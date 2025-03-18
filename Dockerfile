FROM node:20-alpine
WORKDIR /app
COPY package*.json .
COPY *.* .
RUN npm install 
COPY . .
EXPOSE 8080
CMD ["npm", "run","start"]