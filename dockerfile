FROM nginx:latest

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем содержимое проекта
COPY css /usr/share/nginx/html/css
COPY fonts /usr/share/nginx/html/fonts
COPY html /usr/share/nginx/html
COPY js /usr/share/nginx/html/js
COPY Pix /usr/share/nginx/html/Pix

# Устанавливаем права доступа
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]