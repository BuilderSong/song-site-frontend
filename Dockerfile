# this is not used by the deployment, sicne we are using amplify
# Use an official Node.js runtime as a parent image
FROM node

EXPOSE 80

EXPOSE 443

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's code to the working directory
COPY . .

# Set environment variables
ENV REACT_APP_API_URL=$REACT_APP_API_URL
ENV REACT_APP_LINKEDIN_ADDRESS=$REACT_APP_LINKEDIN_ADDRESS
ENV REACT_APP_GITHUB_ADDRESS=$REACT_APP_GITHUB_ADDRESS
ENV REACT_APP_EMAIL_ADDRESS=$REACT_APP_EMAIL_ADDRESS

# Build the app for production
RUN npm run build

# Set the command to start the app
CMD ["npm", "start"]
