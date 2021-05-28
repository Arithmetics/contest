# --- Base Image (all other images are based off this one) ---------------------
FROM node:15.14.0-alpine3.10 AS base

ARG DATABASE_URL
ENV DATABASE_URL=$QOVERY_DATABASE_CONTEST_POSTGRESQL_CONNECTION_URI
ARG SESSION_SECRET
ENV SESSION_SECRET=$SESSION_SECRET
ARG FRONTEND_URL
ENV FRONTEND_URL=$FRONTEND_URL
ARG CLOUDINARY_CLOUD_NAME
ENV CLOUDINARY_CLOUD_NAME=$CLOUDINARY_CLOUD_NAME
ARG CLOUDINARY_KEY
ENV CLOUDINARY_KEY=$CLOUDINARY_KEY
ARG CLOUDINARY_SECRET
ENV CLOUDINARY_SECRET=$CLOUDINARY_SECRET
ARG MAIL_HOST
ENV MAIL_HOST=$MAIL_HOST
ARG MAIL_PORT
ENV MAIL_PORT=$MAIL_PORT
ARG MAIL_USER
ENV MAIL_USER=$MAIL_USER
ARG MAIL_PASS
ENV MAIL_PASS=$MAIL_PASS

# Set working directory.
WORKDIR /var/service

# Perform an upgrade to get all the latest security updates
RUN apk upgrade --no-cache

# --- Setup Stage (image contains NPM credentials, should not be pushed) -------
FROM base AS setup

# Install packages required for building native node modules with node-gyp and
# also add curl and bash for docker-compose.
RUN apk add --no-cache python make g++ curl bash

# Copying only required files for install command (.npmrc needed for scoped packages)
# COPY package.json yarn.lock ./

# Copy over other files needed to run the service. 
# COPY tsconfig.json keystone.ts schema.ts schema.graphql schema.prisma ./
COPY backend/ ./

# Install all dev dependencies (used to build typescript, for docker-compose, etc)
RUN npm install

# --- Build Stage (image contains NPM credentials, should not be pushed) -------
FROM setup AS builder

RUN npm run build

# Removing `.npmrc`, tsconfig and source files as the last step -
RUN rm -rf tsconfig*.json .npmrc src

# --- Final Image --------------------------------------------------------------
FROM base

# Copy over everything we've built from the previous image.
COPY --chown=node:node --from=builder /var/service /var/service

# Switch to the `node` user.
USER node

EXPOSE 3000

# Set default execution command.
CMD npm start