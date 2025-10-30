FROM node:20-bullseye-slim

# Useful tools for native builds (safe & small)
RUN apt-get update \
 && apt-get install -y --no-install-recommends python3 make g++ ca-certificates \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install --no-optional

COPY . .
EXPOSE 8080
CMD ["npm","run","start:dev"]
