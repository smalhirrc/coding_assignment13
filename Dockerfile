
ARG NODE_VERSION=26.3.0

FROM node:${NODE_VERSION}-alpine

RUN apk add --no-cache git

ENV NODE_ENV=development


WORKDIR /Malhi_Sukhpreet_ui_garden_build_checks

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 8083

CMD ["npm", "run", "storybook", "--", "-p", "8083"]