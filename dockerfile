FROM node:14.17-alpine

WORKDIR /app
COPY . /app

RUN npm install
RUN npm install react-scripts@3.4.1 -g
RUN npm run build

CMD ["npm", "start"]
