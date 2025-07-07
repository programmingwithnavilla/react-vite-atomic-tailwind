# Build React app

From node:20-alpine

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build   

#Server Using Nginx
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html


# Remove default Nginx config and replace with a custom one if needed
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]