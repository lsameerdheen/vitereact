FROM node:20-alpine
USER ROOT
RUN useradd -ms /bin/bash viteuser
USER viteuser
WORKDIR /home/viteuser
COPY package*.json .
COPY *.* .
RUN npm install 
COPY . .
EXPOSE 8080
CMD ["npm", "run","start"]