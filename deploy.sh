#!/bin/bash
# Скрипт для деплоя на хостинг через Git

# Переходим в папку с репозиторием
cd /path/to/repo

# Обновляем код
git pull origin main

# Устанавливаем зависимости
npm install

# Собираем проект
npm run build

# Копируем файлы в public_html
cp -r dist/* /home/username/public_html/

echo "Deployment completed!"



