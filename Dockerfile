FROM node:20-alpine
USER root
RUN adduser -D viteuser && mkdir -p /etc/sudoers.d \
        && echo "viteuser ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/viteuser \
        && chmod 0440 /etc/sudoers.d/viteuser
USER viteuser
WORKDIR /home/viteuser/app
RUN chmod -R 777 *
RUN whoami
COPY package*.json .
COPY *.* .
RUN npm install 
COPY . .
EXPOSE 8080
CMD ["npm", "run","start"]