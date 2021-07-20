FROM node:14.15.4-alpine3.12 as base

RUN apk add --no-cache bash
RUN npm i -g @nestjs/cli

USER node

WORKDIR /home/node/app
