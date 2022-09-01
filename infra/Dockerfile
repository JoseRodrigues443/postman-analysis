FROM node:alpine
WORKDIR /usr/template
COPY package.json .
RUN npm install
COPY . .

RUN tsc

CMD ["node", "./dist/index.js"]
