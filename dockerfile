FROM node:18-alpine

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

COPY . .


RUN npm run build

EXPOSE 3000


ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
