FROM node:18.15.0 as build-step
WORKDIR /usr/src/app
COPY package*.json /usr/src/app
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=build-step /usr/src/app/dist/manager /usr/share/nginx/html
COPY --from=build-step /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
