FROM node:20-alpine
USER root
RUN adduser -D viteuser && mkdir -p /etc/sudoers.d \
        && echo "viteuser ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/viteuser \
        && chmod 0440 /etc/sudoers.d/viteuser
RUN chmod -R 777 /home/viteuser
USER viteuser
WORKDIR /home/viteuser/app
RUN whoami
COPY package*.json .
COPY *.* .
USER root
RUN npm install 
COPY . .
EXPOSE 8080
USER viteuser
CMD ["npm", "run","start"]