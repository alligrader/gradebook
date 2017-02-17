FROM nginx
COPY index.html /usr/share/nginx/html
COPY bundle.js /usr/share/nginx/html
COPY style /usr/share/nginx/html/style
