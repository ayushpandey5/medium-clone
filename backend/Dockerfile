FROM node:18-alpine AS build

WORKDIR /src

COPY . .

RUN npm install
RUN npx prisma generate
# RUN npm run deploy
# RUN npx prisma migrate dev
# ENV NODE_ENV=production

EXPOSE 3000

CMD ["ts-node", "index.ts"]