FROM alpine:3.10.2
RUN apk --update add nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./front/index.html /var/www/html/index.html
RUN mkdir -p /run/nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]