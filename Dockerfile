# Use the official Node.js 16 Alpine image as the base image
FROM node:18-alpine

# Set environment variables
ARG DOTENV_KEY
ENV DOTENV_KEY=$DOTENV_KEY

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the entire application to the working directory
COPY . .

# Install Node.js dependencies
RUN npm install

# Build the React application
RUN npm run build 

# Install serve globally to serve the static files
RUN npm install -g serve

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the serve command with HTTPS support and serve the built React application
CMD ["serve", "-s", "-l", "3000", "dist"]
