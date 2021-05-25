FROM node:14-alpine

RUN mkdir -p /usr/src/xxx
WORKDIR /usr/src/xxx

RUN apk update && apk upgrade

ARG CLOUDINARY_CLOUD_NAME
ENV CLOUDINARY_CLOUD_NAME=$CLOUDINARY_CLOUD_NAME

ARG CLOUDINARY_SECRET
ENV CLOUDINARY_SECRET=$CLOUDINARY_SECRET

ARG CLOUDINARY_KEY
ENV CLOUDINARY_KEY=$CLOUDINARY_KEY

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

ARG SESSION_SECRET
ENV SESSION_SECRET=$SESSION_SECRET

ARG FRONTEND_URL
ENV FRONTEND_URL=$FRONTEND_URL



COPY ./backend .

RUN npm install
RUN npm run build

EXPOSE 3000
# start the app
CMD [ "npm", "start" ]


