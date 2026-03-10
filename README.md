# SushiFlow ERP

Sistema web para controle de estoque, fornecedores, contas e movimentacoes de um sushi bar.

## Stack atual

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- API routes com Next.js + Prisma (PostgreSQL)

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

5. Popule o banco com dados iniciais:

```bash
npm run prisma:seed
```

## Scripts

- `npm run dev`: ambiente de desenvolvimento
- `npm run lint`: analise estatica com ESLint
- `npm run build`: build de producao
- `npm run start`: sobe o build de producao
- `npm run prisma:generate`: gera Prisma Client
- `npm run prisma:migrate:dev`: roda migrations em ambiente de desenvolvimento
- `npm run prisma:seed`: popula o banco com dados iniciais para desenvolvimento

## Status do projeto

O sistema ja possui backend (API + Prisma) e dashboard funcional, mas ainda faltam autenticacao, testes automatizados e esteira de CI para producao.

Plano de evolucao: [ROADMAP.md](./ROADMAP.md)
