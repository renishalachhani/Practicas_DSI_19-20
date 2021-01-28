FROM node:12.12.0-buster-slim as stage1
WORKDIR /app
COPY package.json /app/
COPY /src /app/src
RUN npm install -g parcel-bundler
RUN parcel build /app/src/index.html -d dist




FROM nginx:1.17.6
COPY --from=stage1 /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
