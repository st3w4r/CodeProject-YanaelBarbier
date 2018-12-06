FROM node

COPY . /app

WORKDIR /app

RUN npm install
RUN npm rebuild

ENTRYPOINT ["npm", "start"]
