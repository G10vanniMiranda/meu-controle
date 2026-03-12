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

## Banco de dados (Prisma + PostgreSQL / Neon)

1. Crie um arquivo `.env` com base em `.env.example`.
2. Configure as variaveis de conexao.
   
Para Neon, use:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@EP-XXXX-XXXX-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require&pgbouncer=true&connect_timeout=15"
DIRECT_URL="postgresql://USER:PASSWORD@EP-XXXX-XXXX.us-east-2.aws.neon.tech/neondb?sslmode=require"
```

- `DATABASE_URL`: URL com `-pooler` (runtime da aplicacao).
- `DIRECT_URL`: URL sem `-pooler` (migrations do Prisma).
3. Gere o client Prisma:

```bash
npm run prisma:generate
```

4. Aplique a migration inicial quando ela for criada:

```bash
npm run prisma:migrate:dev
```

Para aplicar migrations em producao (sem criar novas):

```bash
npm run prisma:migrate:deploy
```

5. Popule o banco com dados iniciais:

```bash
npm run prisma:seed
```

## Autenticacao basica (obrigatoria para producao)

Configure no `.env`:

```bash
APP_ADMIN_EMAIL="admin@sushiflow.com"
APP_ADMIN_PASSWORD="defina-uma-senha-forte"
APP_AUTH_SECRET="defina-um-segredo-longo"
```

- A tela de login fica em `/login`.
- As rotas de app e `/api/*` exigem sessao autenticada.
- O cookie de sessao e HTTP-only e expira em 12 horas.

## Scripts

- `npm run dev`: ambiente de desenvolvimento
- `npm run lint`: analise estatica com ESLint
- `npm run build`: build de producao
- `npm run start`: sobe o build de producao
- `npm run prisma:generate`: gera Prisma Client
- `npm run prisma:migrate:dev`: roda migrations em ambiente de desenvolvimento
- `npm run prisma:migrate:deploy`: aplica migrations pendentes em producao
- `npm run prisma:seed`: popula o banco com dados iniciais para desenvolvimento

## Status do projeto

O sistema ja possui backend (API + Prisma) e dashboard funcional, mas ainda faltam autenticacao, testes automatizados e esteira de CI para producao.

Plano de evolucao: [ROADMAP.md](./ROADMAP.md)
