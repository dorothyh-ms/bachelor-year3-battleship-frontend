# Stage 1: Build the React app
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

# Set environment variables for production build
ARG VITE_KC_URL
ARG VITE_KC_REALM
ARG VITE_KC_CLIENT_ID
ARG VITE_API_URL

# Build the application
RUN echo "VITE_KC_URL=$VITE_KC_URL" >> .env && \
    echo "VITE_KC_REALM=$VITE_KC_REALM" >> .env && \
    echo "VITE_KC_CLIENT_ID=$VITE_KC_CLIENT_ID" >> .env && \
    echo "VITE_API_URL=$VITE_API_URL" >> .env && \
    npm run build

# Stage 2: Serve the React app with NGINX
FROM nginx:alpine

# Set working directory for nginx
WORKDIR /usr/share/nginx/html

# Remove default static assets
RUN rm -rf ./*

# Copy built application files from the builder stage
COPY --from=builder /app/dist .

COPY nginx.conf /etc/nginx/conf.d/nginx.conf


# Expose port 80 for the application
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]