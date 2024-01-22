# Dockerfile
FROM node:21.6.0-bullseye as build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm config set cache /usr/src/app/.npm && \
    npm ci

# Copy the entire project to the working directory
COPY . .

# Run the build script to generate the "dist" directory
RUN npm run build

FROM nginx:alpine3.18

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the "dist" directory from the build stage to the final stage
COPY --from=build /usr/src/app/build/ /usr/share/nginx/html/

EXPOSE 80
