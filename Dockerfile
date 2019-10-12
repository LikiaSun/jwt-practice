FROM node:10
LABEL maintainer="Likia Sun<likiadevelop@gmail.com>"

WORKDIR /home/app

COPY package.json /home/app/
COPY yarn.lock /home/app/
RUN yarn && yarn cache clean

COPY . /home/app

CMD [ "yarn", "start" ]
