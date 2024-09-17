# Stage 1: Build Strapi
FROM node:18-alpine AS build

# Install build dependencies
RUN apk add --no-cache libc6-compat

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build the project
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy SSL certificates
COPY ssl/privkey.pem /etc/ssl/certs/server.crt
COPY ssl/fullchain.pem /etc/ssl/private/server.key

# Copy built app from the previous stage
COPY --from=build /usr/src/app /usr/src/app

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the HTTPS port
EXPOSE 443

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
