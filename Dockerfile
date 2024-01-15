# Use the official Node.js 16 image as a parent image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's source code from your host to your image filesystem.
COPY . .

# Bind the port that the node server runs on
EXPOSE 3003

# Command to run your application using nodemon for development
CMD ["npm", "run", "dev"]
