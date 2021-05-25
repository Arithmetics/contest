FROM node:14-alpine

RUN mkdir -p /usr/src/xxx
WORKDIR /usr/src/xxx

RUN apk update && apk upgrade

COPY ./backend /usr/src/xxx/
RUN echo $CLOUDINARY_CLOUD_NAME
RUN echo $SESSION_SECRET
RUN echo $QOVERY_ROUTER_MAIN_CONTEST_BACKEND_URL
RUN yarn install
RUN yarn build

EXPOSE 3000
# start the app
CMD [ "yarn", "start" ]