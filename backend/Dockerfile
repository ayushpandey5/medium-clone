FROM node:18-alpine AS build

WORKDIR /src

COPY . .

RUN npm install
RUN npx prisma generate
# RUN npm run deploy
# RUN npx prisma migrate dev

EXPOSE 3000

CMD ["node", "dist/index.js"]