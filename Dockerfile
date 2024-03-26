# Use the official Node.js image as base
FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install --production

# Bundle app source
COPY . .

# Expose port 5050
EXPOSE 5050

# Command to run the application
CMD [ "npm", "start" ]
