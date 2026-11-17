FROM node:26-alpine AS build
WORKDIR /app

RUN npm i -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm i --frozen-lockfile

COPY . .

RUN pnpm run build
RUN pnpm prune --prod

FROM node:26-alpine AS deploy
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY package.json .

EXPOSE 3000

CMD ["node", "build"]
