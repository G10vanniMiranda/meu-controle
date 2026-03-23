# Mahal ERP

Sistema web para controle de estoque, fornecedores, contas e movimentacoes do Mahal Sushi.

## Stack atual

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- API routes com Next.js + Prisma 7 (PostgreSQL)
- Autenticacao com sessao HTTP-only e usuarios no banco

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
DATABASE_URL="postgresql://USER:PASSWORD@EP-XXXX-XXXX-pooler.us-east-2.aws.neon.tech/neondb?sslmode=verify-full&pgbouncer=true&connect_timeout=15"
DIRECT_URL="postgresql://USER:PASSWORD@EP-XXXX-XXXX.us-east-2.aws.neon.tech/neondb?sslmode=verify-full"
```

- `DATABASE_URL`: URL com `-pooler` (runtime da aplicacao).
- `DIRECT_URL`: URL sem `-pooler` (migrations do Prisma).
3. O projeto usa `prisma.config.ts` para schema, datasource e seed.

4. Gere o client Prisma:

```bash
npm run prisma:generate
```

O client e gerado em `generated/db`.

5. Aplique as migrations em desenvolvimento:

```bash
npm run prisma:migrate:dev
```

Para aplicar migrations em producao (sem criar novas):

```bash
npm run prisma:migrate:deploy
```

6. Popule o banco com dados iniciais:

```bash
npm run prisma:seed
```

## Autenticacao basica (obrigatoria para producao)

Configure no `.env`:

```bash
APP_ADMIN_EMAIL="admin@mahalsushi.com"
APP_ADMIN_PASSWORD_HASH="pbkdf2_sha256$210000$SEU_SALT_HEX$SEU_HASH_HEX"
APP_AUTH_SECRET="defina-um-segredo-longo"
```

Para gerar o hash da senha de admin:

```bash
npm run auth:hash -- "sua-senha-forte"
```

- A tela de login fica em `/login`.
- As rotas de app e `/api/*` exigem sessao autenticada.
- O cookie de sessao e HTTP-only e expira em 12 horas.
- Usuarios tambem podem autenticar via tabela `TeamMember`, com senha em hash PBKDF2.

## Scripts

- `npm run dev`: ambiente de desenvolvimento
- `npm run lint`: analise estatica com ESLint
- `npm run build`: build de producao
- `npm run start`: sobe o build de producao
- `npm run prisma:generate`: gera Prisma Client
- `npm run prisma:migrate:dev`: roda migrations em ambiente de desenvolvimento
- `npm run prisma:migrate:deploy`: aplica migrations pendentes em producao
- `npm run prisma:seed`: popula o banco com dados iniciais via `tsx prisma/seed.ts`

## Status do projeto

O sistema ja possui:

- backend com API routes para insumos, fornecedores, contas, movimentacoes, fluxo de caixa e usuarios;
- banco relacional com Prisma 7, `prisma.config.ts` e migrations versionadas;
- autenticacao com protecao de rotas e login;
- dashboard e modulos operacionais funcionando sobre dados persistidos.

Pendencias principais:

- testes automatizados;
- CI basico para lint e build;
- mais regras de negocio para consistencia financeira e de estoque;
- evolucao de CRUD, filtros e auditoria.

Plano de evolucao: [ROADMAP.md](./ROADMAP.md)
