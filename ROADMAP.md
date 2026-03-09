# Roadmap de Evolucao - SushiFlow ERP

Este documento organiza a evolucao do projeto em fases para sair de MVP local e chegar a uma versao de producao.

## Fase 1 - Fundacao de Producao

Objetivo: garantir base tecnica minima para deploy confiavel.

- [ ] Substituir dados em `localStorage` por banco relacional (PostgreSQL + Prisma).
- [ ] Criar API routes (`app/api/*`) para insumos, fornecedores, contas e movimentacoes.
- [ ] Padronizar validacoes de entrada com schema (Zod) no backend.
- [ ] Implementar migration inicial e seed de dados.
- [ ] Configurar ambiente com `.env.example`.
- [ ] Adicionar CI basico (lint + build + testes).

## Fase 2 - Regra de Negocio e Consistencia

Objetivo: garantir que os modulos conversem entre si sem divergencia de dados.

- [ ] Gerar fluxo de caixa automaticamente a partir de eventos de contas/movimentacoes.
- [ ] Implementar transacoes para atualizar estoque e historico de movimentacao de forma atomica.
- [ ] Criar status automatico de contas por vencimento (aberta/atrasada/paga).
- [ ] Bloquear inconsistencias (ex.: saida sem saldo, fornecedor removido com insumo ativo).

## Fase 3 - Operacao Completa

Objetivo: tornar o sistema utilizavel no dia a dia.

- [ ] Completar CRUD (editar/excluir) em todos os modulos.
- [ ] Adicionar filtros, busca e ordenacao nas tabelas.
- [ ] Criar dashboard com periodos (7d/30d/mes atual).
- [ ] Adicionar importacao/exportacao (CSV) para dados mestres e relatorios.
- [ ] Implementar confirmacoes e trilha de auditoria para acoes sensiveis.

## Fase 4 - Seguranca e Acesso

Objetivo: suportar uso multiusuario com controle de permissao.

- [ ] Implementar autenticacao (NextAuth/Auth.js ou equivalente).
- [ ] Definir papeis: admin, financeiro, estoque.
- [ ] Isolar dados por organizacao/unidade (multi-tenant simples).
- [ ] Registrar log de acesso e acao critica.

## Fase 5 - Qualidade e Observabilidade

Objetivo: reduzir regressao e melhorar manutencao.

- [ ] Cobertura de testes:
  - unitarios para regras de negocio;
  - integracao para API;
  - E2E para fluxos principais.
- [ ] Monitoramento de erros (Sentry ou similar).
- [ ] Logs estruturados para eventos de negocio.
- [ ] Politica de backup/restore.

## Entrega sugerida por sprint

- Sprint 1: Fase 1 (infra + API base + migration inicial).
- Sprint 2: Fase 2 (consistencia financeira/estoque).
- Sprint 3: Fase 3 (CRUD completo + filtros).
- Sprint 4: Fases 4 e 5 iniciais (auth + testes de regressao + observabilidade).
