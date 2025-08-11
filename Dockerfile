FROM node:latest

# Рабочая директория
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json ./

RUN npm install

# Копируем всё остальное
COPY . .

EXPOSE 8081

CMD ["npm", "start"]
