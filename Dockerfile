FROM node:22-alpine
WORKDIR /app
COPY package.json ./
COPY public ./public
COPY server ./server
COPY scripts ./scripts
ENV PORT=8080 STORAGE_DIR=/data
RUN mkdir -p /data && chown node /data
VOLUME /data
EXPOSE 8080
USER node
CMD ["node", "server/server.js"]
