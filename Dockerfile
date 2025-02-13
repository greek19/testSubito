FROM node:18.18-alpine

WORKDIR /mnt

COPY ./SubitoTest .

COPY ./scripts ./scripts

RUN npm install --ignore-scripts

RUN npm run build

EXPOSE 9090

CMD [ "npm", "run", "preview", "--", "--port", "9090", "--host", "0.0.0.0" ]
