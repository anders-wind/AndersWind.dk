FROM node:alpine
COPY Site /app
WORKDIR /app
RUN npm install
RUN npm run build
CMD ["/bin/sh"]