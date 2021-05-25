# --- Base Image (all other images are based off this one) ---------------------
FROM node:15.14.0-alpine3.10 AS base



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
COPY backend/package.json backend/yarn.lock ./

# Copy over other files needed to run the service. 
COPY backend/tsconfig.json backend/keystone.ts backend/schema.ts backend/chema.graphql backend/schema.prisma ./

# Install all dev dependencies (used to build typescript, for docker-compose, etc)
RUN yarn install --frozen-lockfile

# --- Build Stage (image contains NPM credentials, should not be pushed) -------
FROM setup AS builder

RUN yarn build

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
CMD yarn start