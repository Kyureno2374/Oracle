# Oracle Studio

Сайт веб-студии Oracle. Next.js + Go + PostgreSQL.

## Стек

- **Клиент**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Сервер**: Go, chi
- **БД**: PostgreSQL 16

## Запуск

```bash
docker-compose up -d
cd server && go run cmd/api/main.go
cd client && npm i && npm run dev
```
