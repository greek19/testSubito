FROM node:18.18.0-alpine

WORKDIR /mnt

COPY . .

RUN npm install --legacy-peer-deps

RUN npm run build

EXPOSE 9090

# ENTRYPOINT ["sh", "./scripts/tests.sh"]

CMD ["npm", "run", "preview"]
