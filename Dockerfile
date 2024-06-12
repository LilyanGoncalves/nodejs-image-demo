FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

# Ajustar as permissões do diretório de trabalho
RUN chmod -R 755 /home/node/app

EXPOSE 3000

CMD ["npm", "run", "seed-start"]
