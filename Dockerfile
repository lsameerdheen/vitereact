FROM node:20-alpine
USER root
RUN useradd -ms /bin/bash viteuser
USER viteuser
WORKDIR /home/viteuser
COPY package*.json .
COPY *.* .
RUN npm install 
COPY . .
EXPOSE 8080
CMD ["npm", "run","start"]