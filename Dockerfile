FROM node:14

WORKDIR /src/app

COPY package.json /src/app/

RUN npm install

COPY . /src/app

EXPOSE 3000

CMD [ "npm","run", "start" ]