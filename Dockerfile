FROM node:22.3.0-alpine as build

#WORKDIR /app
#
#COPY package*.json ./
#RUN npm install
#
#COPY . .
#
#COPY .env .env
#
##RUN npx nuxi generate
#RUN npm run build
#
##FROM nginx:alpine AS production
#
##COPY /dist /usr/share/nginx/html
#COPY --from=build /app/.output /app/.output
##COPY --from=build /app/.output/public /app/share/nginx/html
#
#ENV NITRO_PORT=3000
#
#EXPOSE 3000
#
#CMD [ "node", ".output/server/index.mjs" ]
##CMD ["npm", "run", "preview"]



# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Nuxt 3 application for static hosting
RUN npx nuxi generate

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine

# Copy the built files to Nginx's default static directory
COPY --from=build /app/.output/public /usr/share/nginx/html

# Copy a custom Nginx configuration (optional)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port Nginx will listen on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
