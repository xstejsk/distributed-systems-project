# Specify the base image
FROM node:19

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json from the monitor directory to the working directory
COPY monitor/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code from the monitor directory to the working directory
COPY monitor/ .

# Use an official Node.js runtime as a parent image
FROM node:19

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

RUN npm run build

# Install `serve` to run the application
RUN npm install -g serve

# Expose any necessary ports
EXPOSE 8001

# Define the command to run your application
CMD ["serve", "-s", "build", "-l", "8001"]


# Build for production
RUN npm run build

# Install `serve` to run the application
RUN npm install -g serve

# Expose any necessary ports
EXPOSE 8001

# Define the command to run your application
CMD ["serve", "-s", "dist", "-l", "8001"]
