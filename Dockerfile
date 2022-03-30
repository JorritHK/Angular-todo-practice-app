FROM node:16.14.0-alpine

ENV MONGODB_URI='mongodb://localhost:27017/todo'

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN yarn install
