FROM node:18

# Установка сборочных утилит
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5050

CMD ["npm", "start"]
