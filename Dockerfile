# Use the official nginx image as the base image
FROM nginx:alpine

# Copy the static files into the nginx web directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
