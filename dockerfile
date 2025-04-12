# Используем базовый образ Debian
FROM debian:buster-slim

# Установка необходимых пакетов
RUN apt-get update && \
    apt-get install -y \
    nginx \
    git \
    curl \
    ca-certificates && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Клонируем репозиторий GitHub
RUN git clone https://github.com/neveroven/Phasmophobia.git /tmp/repo

# Проверяем содержимое директории /tmp/repo
RUN ls -l /tmp/repo

# Копируем конфигурацию Nginx
RUN cp /tmp/repo/nginx.conf /etc/nginx/conf.d/default.conf

# Копируем содержимое проекта из склонированного репозитория
RUN cp -r /tmp/repo/css /usr/share/nginx/html/
RUN cp -r /tmp/repo/fonts /usr/share/nginx/html/
RUN cp -r /tmp/repo/js /usr/share/nginx/html/
RUN cp -r /tmp/repo/Pix /usr/share/nginx/html/
RUN cp /tmp/repo/*.html /usr/share/nginx/html/

# Устанавливаем права доступа
RUN chmod -R 755 /usr/share/nginx/html

# Опубликовать порт и запустить Nginx
EXPOSE 80 8080
CMD ["nginx", "-g", "daemon off;"]