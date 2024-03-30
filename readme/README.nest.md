# nest scripts
```bash
npm config set registry https://registry.npmmirror.com
npm i -g @nestjs/cli

mkdir packages
cd packages
nest g application rock-exam-be 
yarn add @nestjs/platform-fastify @fastify/static fastify-multer
yarn add @nestjs/sequelize sequelize sequelize-typescript pg-hstore pg
yarn add bcrypt cheerio
yarn add passport @nestjs/passport passport-jwt

yarn add ioredis @liaoliaots/nestjs-redis

yarn add @nestjs/platform-socket.io @socket.io/redis-adapter @nestjs/websockets socket.io

yarn add app-root-path class-transformer class-validator

yarn add es7@npm:@elastic/elasticsearch@7

yarn add tencentcloud-sdk-nodejs qcloud-cos-sts

yarn add @nestjs/swagger
```