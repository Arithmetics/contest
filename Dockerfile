# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=15.8.0
# https://github.com/Yelp/dumb-init/releases
ARG DUMB_INIT_VERSION=1.2.5

# Build container
FROM node:${NODE_VERSION}-alpine AS build
ARG DUMB_INIT_VERSION

WORKDIR /home/node

ADD . /home/node
RUN cd backend && yarn install && yarn build && yarn cache clean

# Runtime container
FROM node:${NODE_VERSION}-alpine

WORKDIR /home/node

COPY --from=backend/build /home/node /home/node

EXPOSE 3000
CMD ["yarn", "start"]