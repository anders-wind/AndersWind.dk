FROM node:alpine
COPY . /app
WORKDIR /app
RUN npm install
ENTRYPOINT ["/bin/sh"]
CMD ["npm", "run", "build"]