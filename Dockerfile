FROM node:carbon

WORKDIR /home/web-system-sugang

# for caching node_modules
COPY package.json ./
RUN npm install

# copy source
COPY . ./

ENV NODE_ENV production

# angular build
RUN npm install --unsafe-perm -g @angular/cli
RUN npm run build --production

# open port
EXPOSE 3000

# start server
CMD ["npm", "run", "start:production"]