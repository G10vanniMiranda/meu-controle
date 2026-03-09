# SushiFlow ERP

Sistema web para controle de estoque, fornecedores, contas e movimentacoes de um sushi bar.

## Stack atual

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Persistencia local via `localStorage` (MVP)

## Como executar

```bash
npm install
npm run dev
```

Aplicacao em: `http://localhost:3000`

## Banco de dados (Prisma + PostgreSQL)

1. Crie um arquivo `.env` com base em `.env.example`.
2. Suba um PostgreSQL local e ajuste `DATABASE_URL`.
3. Gere o client Prisma:

```bash
npm run prisma:generate
```

4. Aplique a migration inicial quando ela for criada:

```bash
npm run prisma:migrate:dev
```

## Scripts

- `npm run dev`: ambiente de desenvolvimento
- `npm run lint`: analise estatica com ESLint
- `npm run build`: build de producao
- `npm run start`: sobe o build de producao
- `npm run prisma:generate`: gera Prisma Client
- `npm run prisma:migrate:dev`: roda migrations em ambiente de desenvolvimento

## Status do projeto

O sistema esta funcional como MVP local (cadastro/listagem e dashboard), mas ainda sem backend/banco, autenticacao e testes automatizados.

Plano de evolucao: [ROADMAP.md](./ROADMAP.md)
