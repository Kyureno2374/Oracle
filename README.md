# Oracle - Full-Stack Project

Монорепозиторий с Next.js (фронтенд) и Go (бэкенд).

## Стек технологий

- **Фронтенд**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Бэкенд**: Go с chi router
- **База данных**: PostgreSQL 16
- **Архитектура**: Feature-Sliced Design (FSD) для клиента

## Структура проекта

```
oracle/
├── client/          # Next.js приложение
├── server/          # Go API
├── docker-compose.yml
└── README.md
```

## Быстрый старт

### 1. Запуск базы данных

```bash
docker-compose up -d
```

### 2. Запуск бэкенда

```bash
cd server
go run cmd/api/main.go
```

Сервер запустится на `http://localhost:8080`

### 3. Запуск фронтенда

```bash
cd client
npm install
npm run dev
```

Приложение будет доступно на `http://localhost:3000`

## API Endpoints

- `GET /api/health` - проверка работоспособности сервера

## Переменные окружения

### Server (.env)
```
SERVER_PORT=8080
DB_URL=postgres://user:pass@localhost:5432/dbname?sslmode=disable
```

### Client (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```
