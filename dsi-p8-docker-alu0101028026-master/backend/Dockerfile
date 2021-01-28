FROM node:12.12.0-buster-slim
WORKDIR /app
COPY package.json /app
RUN npm install
COPY server.js /app
COPY data.json /app
EXPOSE 8081
CMD ["node", "server.js"]
