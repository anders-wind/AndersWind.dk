FROM node:alpine
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 9876
ENTRYPOINT ["npm", "run", "build"]