FROM node:alpine
CD Site
RUN npm install
RUN npm run build
RUN mkdir ../dist
RUN cp -v dist ../dist
CMD ["/bin/sh"]