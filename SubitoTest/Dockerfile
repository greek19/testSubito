FROM node:18.18-alpine

WORKDIR /mnt

COPY . .

RUN npm install --ignore-scripts && npm run build && npm run test

EXPOSE 9090

CMD [ "npm", "run", "preview", "--", "--port", "9090", "--host", "0.0.0.0" ]
