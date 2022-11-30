FROM nginx

COPY ["dist", "/usr/share/nginx/html"]

expose 80