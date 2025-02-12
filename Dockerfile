FROM node:18.18-alpine

WORKDIR /mnt

COPY package*.json ./

COPY . .

RUN npm install 

RUN npm run build

EXPOSE 9090

# ENTRYPOINT ["sh", "./scripts/tests.sh"]

CMD ["npm", "run", "preview"]
