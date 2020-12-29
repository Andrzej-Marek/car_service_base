FROM node:10 as client

WORKDIR /usr/app/client/
COPY . ./
RUN npm install
RUN npm install react-scripts@3.0.1 -g

RUN npm run build:prod


# Setup the server

FROM node:10

WORKDIR /usr/app/
COPY --from=client /usr/app/client/dist/ ./client/dist/

WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN npm i
COPY server/ ./

EXPOSE 5000

CMD ["npm", "start"]


# Set the base image to node:12-alpine
# FROM node:12-alpine as build

# # Specify where our app will live in the container
# WORKDIR /app

# # Copy the React App to the container
# COPY . /app/

# # Prepare the container for building React
# RUN npm install
# RUN npm install react-scripts@3.0.1 -g
# # We want the production version
# RUN npm run build:dev

# EXPOSE 8080

# CMD ["npm", "start"]
# # # Prepare nginx
# # FROM nginx:1.16.0-alpine
# # COPY --from=build /app/dist /usr/share/nginx/html
# # RUN rm /etc/nginx/conf.d/default.conf
# # COPY nginx/nginx.conf /etc/nginx/conf.d

# # # Fire up nginx
# # EXPOSE 80
# # CMD ["nginx", "-g", "daemon off;"]

