# Use Nginx as base image
FROM nginx:alpine

# Copy the built Angular app into the nginx directory
COPY dist/fsd-exam /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run the Angular app
CMD ["nginx", "-g", "daemon off;"]
