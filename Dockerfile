# Stage 1 buid my app npm run build


FROM node:alpine as build-stage
WORKDIR /app

COPY package*.json /app/
RUN yarn install

COPY ./ /app/
RUN yarn build

# # # Stage 2 ngnix proxy configuration
FROM nginx:alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 6543

