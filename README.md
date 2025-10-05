# API Refund

API para gerenciamento de solicitações de reembolso com sistema de autenticação e upload de comprovantes.

## Descrição Técnica

Sistema de API REST desenvolvido em Node.js que permite aos usuários solicitarem reembolsos de despesas. A aplicação gerencia usuários com diferentes níveis de acesso (funcionário e gerente), autenticação via JWT, upload de comprovantes e categorização de despesas.

## Bibliotecas Utilizadas

- **Express** - Framework web para Node.js
- **Prisma** - ORM para gerenciamento do banco de dados SQLite
- **JWT (jsonwebtoken)** - Autenticação baseada em tokens
- **bcrypt** - Criptografia de senhas
- **Multer** - Upload de arquivos
- **Zod** - Validação de dados e schemas
- **CORS** - Configuração de políticas de origem cruzada
- **TypeScript** - Tipagem estática para JavaScript

## Padrão de Projeto

A aplicação segue o padrão **MVC (Model-View-Controller)** com organização modular:

```
src/
├── controllers/     # Lógica de negócio e controle de requisições
├── middlewares/     # Middlewares de autenticação e tratamento de erros
├── routes/          # Definição das rotas da API
├── database/        # Configuração do Prisma
├── configs/         # Configurações de autenticação e upload
├── providers/       # Provedores de serviços (storage)
├── utils/           # Utilitários e classes de erro
└── types/           # Definições de tipos TypeScript
```

## Setup e Configuração

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório e instale as dependências:

```bash
npm install
```

2. Configure o banco de dados:

```bash
npx prisma migrate dev
npx prisma generate
```

3. Execute a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

A API estará disponível em `http://localhost:3333`

### Variáveis de Ambiente

Configure as seguintes variáveis no arquivo `.env`:

```env
# JWT Secret (recomendado: usar uma chave segura em produção)
JWT_SECRET=sua_chave_secreta_aqui

# Configurações do banco de dados
DATABASE_URL="file:./dev.db"
```

### Endpoints Principais

- `POST /users` - Cadastro de usuário
- `POST /sessions` - Login
- `POST /refunds` - Criar solicitação de reembolso
- `GET /refunds` - Listar solicitações (com paginação)
- `GET /refunds/:id` - Listar uma solicitação em especifico.
- `POST /uploads` - Upload de comprovantes
- `GET /uploads` - Visualização do arquivo.
