FROM node:carbon

# copy source
COPY . /home/web-system-sugang
WORKDIR /home/web-system-sugang

ENV NODE_ENV production

# open port
EXPOSE 3000

# start server
CMD ["npm", "start"]