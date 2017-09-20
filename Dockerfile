FROM node:8.5.0

ADD . /usr/src/app
WORKDIR /usr/src/app

ENV NODE_ENV production
ENV IS_DOCKER ISDOCKERTRUE

EXPOSE 3000

RUN npm i
CMD ["npm", "start"]
