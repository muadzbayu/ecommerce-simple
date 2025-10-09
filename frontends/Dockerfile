# FROM node:20

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# # Tidak usah COPY . . biar pakai volume dari compose

# CMD ["npm", "start"]

# ---------- Stage 1: Build ----------
FROM node:20 AS build
WORKDIR /app

# copy package.json & install deps
COPY package*.json ./
RUN npm install

# copy seluruh source
COPY . .

# build untuk production (hasil ke /app/build)
RUN npm run build


# ---------- Stage 2: Serve ----------
FROM nginx:alpine

# copy hasil build React ke Nginx
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

