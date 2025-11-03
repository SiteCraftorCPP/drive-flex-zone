# Инструкция по деплою на хостинг REG.RU

## Способ 1: Через SSH (через Shell-клиент)

### Шаг 1: Подключись к серверу
- Открой SSH клиент (PuTTY, или Shell-клиент в панели)
- Сервер: `server275.hosting.reg.ru`
- Логин: `u3310807`
- Пароль: `MQqYqR338lsTd8kb`

### Шаг 2: Выполни команды:

```bash
# Переходим в домашнюю папку
cd ~

# Создаём папку для проекта (если ещё нет)
mkdir -p projects
cd projects

# Клонируем репозиторий
git clone https://github.com/SiteCraftorCPP/drive-flex-zone.git

# Переходим в папку проекта
cd drive-flex-zone

# Устанавливаем зависимости (если Node.js есть на сервере)
npm install

# Собираем проект
npm run build

# Копируем файлы в public_html
# Уточни путь к public_html - может быть ~/public_html или ~/www
cp -r dist/* ~/public_html/
```

## Способ 2: Через Менеджер файлов (проще)

1. Зайди в "Менеджер файлов" в панели
2. Найди папку `public_html` или `www`
3. Загрузи архив `site-for-hosting.zip`
4. Распакуй архив в этой папке

## Обновление сайта (после первого деплоя):

```bash
cd ~/projects/drive-flex-zone
git pull origin main
npm run build
cp -r dist/* ~/public_html/
```



