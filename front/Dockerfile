FROM node:10 as client

WORKDIR /usr/app/client/
COPY fron/package*.json ./
RUN npm install
RUN npm install react-scripts@3.0.1 -g
COPY client/ ./
RUN npm run build:dev


CMD ["npm", "start"]