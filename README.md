# 🚀 Запуск Expo-приложения через Docker

Этот проект запускается в Docker-контейнере с помощью `npm start`.  
Подходит для разработки и тестирования без установки зависимостей на локальную машину.

---

## 🐳 Требования

Перед началом убедитесь, что установлено:

- [Docker](https://www.docker.com/get-started) (Desktop или CLI)
- Git (опционально, для клонирования)

> 💡 Поддерживается на: **Windows, macOS, Linux**

---

## 📦 Установка Docker

### Windows / macOS

1. Скачайте и установите **Docker Desktop**:  
   👉 [https://www.docker.com/get-started](https://www.docker.com/get-started)
2. Запустите Docker Desktop и дождитесь, пока иконка станет зелёной.

### Linux (Ubuntu/Debian)

```bash
# Установите Docker
sudo apt update
sudo apt install -y docker.io docker-compose

# Добавьте пользователя в группу docker
sudo usermod -aG docker $USER

# Перезагрузитесь или выполните:
newgrp docker
```

### Как развернуть?

```bash
git clone https://github.com/Vadim-Makhnev/alfa-app
cd alfa-app
```

```bash
docker build -t myapp .

docker run -p 8081:8081 myapp
```

### 📱 Рекомендация: настройка эмуляции в браузере

Для точного тестирования мобильного интерфейса в **Chrome DevTools** советую использовать следующие параметры, имитирующие современный смартфон с высокой плотностью экрана:

- **Разрешение (Resolution)**: `411 x 914` px
- **Device Pixel Ratio (DPR)**: `3`
- **Устройство**: _Google Pixel 5 / Samsung Galaxy S20 (похожие габариты)_

#### Как настроить:

1. Откройте **Chrome DevTools** (`F12` или `Ctrl+Shift+I`)
2. Нажмите на иконку **📱 Device Toolbar** в левом верхнем углу
3. Выберите **"Edit…"** → **"Add custom device"**
4. Заполните:
   - Device name: `Alfa Mobile Preview`
   - Width: `411`
   - Height: `914`
   - Device pixel ratio: `3`
5. Сохраните и выберите устройство из списка.

### 📱 Как запустить на Android-эмуляторе

Чтобы запустить приложение на виртуальном устройстве, используйте **Android Studio** и встроенный эмулятор.

#### 1. Запустите Android Studio

- Откройте Android Studio
- Перейдите в **Device Manager** (в меню: `View → Tool Windows → Device Manager`)

#### 2. Создайте или запустите эмулятор

- Рекомендуемое устройство: **Google Pixel 5**
- Версия Android: **API 30+** (Android 11 или новее)
- Убедитесь, что **Play Store** включён (если нужно)

#### 3. Запустите эмулятор

- Нажмите "▶️" рядом с устройством
- Дождитесь полной загрузки (может занять 1–3 минуты)

#### 4. Запустите приложение из терминала

В терминале уже с запущенной программой нужно написать, для запуска на эмуляторе:

```bash
a
```

для этого нужно подключится к контейнеру:

```bash
docker exec -it <container_id> sh
```
