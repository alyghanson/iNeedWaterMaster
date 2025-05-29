FROM node:alpine

WORKDIR /app

# Install bash
RUN apk add --no-cache bash

COPY . .

RUN npm install

# Copy the downloaded wait-for-it.sh script
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

EXPOSE 3001

CMD ["bash", "./wait-for-it.sh", "db:5432", "--", "npm", "start"]