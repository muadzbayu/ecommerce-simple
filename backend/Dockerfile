# FROM node:20

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# # Tidak usah COPY . . biar pakai volume dari compose

# CMD ["npm", "run", "start:dev"]

FROM node:20
WORKDIR /app

# copy package.json & install deps
COPY package*.json ./
RUN npm install

# copy seluruh source
COPY . .

# build nestjs ke dist/
RUN npm run build

# jalankan hasil build
CMD ["node", "dist/main.js"]

EXPOSE 4000
