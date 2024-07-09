# Dockerfile
FROM ubuntu:20.04

RUN apt-get update && \
    apt-get install -y nginx && \
    rm -rf /var/lib/apt/lists/*

RUN useradd -ms /bin/bash nginx

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
