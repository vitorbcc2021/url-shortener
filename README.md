# 🚀 URL Shortener Backend

Este é o backend do projeto **URL Shortener**, desenvolvido em **Node.js** e **Express** com autenticação JWT, documentação Swagger e integração com MongoDB via Mongoose.

> Você pode visualizar o projeto do frontend no repositório: [url-shortener-frontend](https://github.com/vitorbcc2021/url-shortener-frontend)

---

## 📚 Índice

- [🚀 URL Shortener Backend](#-url-shortener-backend)
  - [📚 Índice](#-índice)
  - [Sobre o Projeto](#sobre-o-projeto)
  - [Funcionalidades](#funcionalidades)
  - [Tecnologias e Dependências](#tecnologias-e-dependências)
  - [Como Executar](#como-executar)
  - [📄 Documentação da API (Swagger)](#-documentação-da-api-swagger)
  - [📂 Estrutura de Pastas](#-estrutura-de-pastas)
  - [📝 Melhorias Futuras](#-melhorias-futuras)
  - [📬 Contato](#-contato)

---

## Sobre o Projeto

Este backend permite que usuários criem contas, façam login e gerenciem URLs encurtadas. O sistema suporta diferentes perfis de usuário (cliente, admin e recrutador para testes) e garante que cada usuário só acesse suas próprias URLs.

---

## Funcionalidades

- **Cadastro e login de usuários** com senha criptografada (bcrypt)
- **Autenticação JWT** com controle de expiração de sessão
- **Gerenciamento de URLs**: criar, listar, editar e deletar URLs encurtadas
- **Perfil de Recrutador**: login especial para testes, com limpeza automática das URLs após logout ou expiração do token
- **Documentação interativa** via Swagger
- **Controle de acesso** por roles (cliente, admin)
- **Deploy pronto para produção** (exemplo: Render.com)

---

## Tecnologias e Dependências

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/) (MongoDB ODM)
- [bcrypt](https://www.npmjs.com/package/bcrypt) (hash de senhas)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (JWT)
- [dotenv](https://www.npmjs.com/package/dotenv) (variáveis de ambiente)
- [hyperdyperid](https://www.npmjs.com/package/hyperdyperid) (geração de IDs únicos)
- [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) & [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) (documentação)
- [cors](https://www.npmjs.com/package/cors) (CORS)
- [nodemon](https://www.npmjs.com/package/nodemon) (dev)

---

## Como Executar

1. **Clone o repositório:**
    ```sh
    git clone https://github.com/vitorbcc2021/url-shortener-backend.git
    cd url-shortener-backend
    ```
2. **Instale as dependências:**
    ```sh
    npm install
    ```
3. **Configure as variáveis de ambiente:**
    - Crie um arquivo `.env` na raiz com:
    ```
    PORT=3000
    SECRET=sua_chave_secreta_jwt
    MONGODB_URI=sua_string_de_conexão_mongodb
    ```
4. **Inicie o servidor:**
    ```sh
    npm run dev
    ```
    O backend estará rodando em `http://localhost:3000/`
    
## 📄 Documentação da API (Swagger)
<img src="./docs/assets/swagger-seeklogo.png" alt="Swagger UI" width="600"/>   

Acesse a documentação interativa Swagger em:
<a href="https://url-shortener-1x3f.onrender.com/api-docs/">https://url-shortener-1x3f.onrender.com/api-docs/</a>  
   - Teste todos os endpoints diretamente pelo navegador.  
   - Veja exemplos de requisições e respostas.
    
## 📂 Estrutura de Pastas
    .
    ├── controllers/         # Lógica dos endpoints (auth, url)
    ├── dto/                # Data Transfer Objects (validação de dados)
    ├── docs/               # Configuração e componentes do Swagger
    ├── middlewares/        # Middlewares de autenticação e autorização
    ├── models/             # Schemas do Mongoose (User, Url)
    ├── routes/             # Definição das rotas Express
    ├── utils/              # Utilitários (ex: conexão com o banco)
    ├── server.js           # Ponto de entrada da aplicação
    └──package.json

## 📝 Melhorias Futuras
    - Permitir encurtamento ilimitado de URLs (remover limite de 10.000)
    - Suporte a domínios personalizados
    - Melhorar tratamento de erros e mensagens de retorno
    - Implementar testes automatizados
    - Otimizar limpeza automática das URLs do recrutador
    - Adicionar logs e monitoramento
    
## 📬 Contato
Dúvidas ou sugestões?
Abra uma issue ou entre em contato(informações disponíveis no meu [GitHub](http://www.github.com/vitorbcc2021)).