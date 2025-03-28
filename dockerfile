FROM nginx
MAINTAINER  Oven
RUN rm -rf /usr/share/nginx/html/*
COPY ./*.* /usr/share/nginx/html
COPY ./Achivments/* /usr/share/nginx/html/Achivments/
COPY ./bg/* /usr/share/nginx/html/bg/
COPY ./fonts/* /usr/share/nginx/html/fonts/
COPY ./Imgs/* /usr/share/nginx/html/Imgs/
COPY ./itemsimg/* /usr/share/nginx/html/itemmmsimg/
