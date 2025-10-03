FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

# Tidak usah COPY . . biar pakai volume dari compose

CMD ["npm", "run", "start:dev"]
