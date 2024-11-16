
# **Link Shortener API**

Bem-vindo à documentação da **Link Shortener API**, um serviço simples para encurtar URLs e gerenciar links curtos.

---

## **Funcionalidades**
- **Encurtar URL:** Transforme links longos em links curtos.
- **Redirecionamento:** Redirecione para a URL original ao acessar o link curto.
- **Estatísticas (opcional):** Monitore cliques e dados de uso.
- **Autenticação (opcional):** Controle o acesso à API.

---

## **Endpoints**

### **1. Encurtar URL**
**POST** `/api/shorten`

- **Descrição:** Gera um link curto a partir de uma URL longa.
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
      "long_url": "https://exemplo.com/artigo/interessante"
  }
  ```
- **Resposta:**
  ```json
  {
      "short_url": "https://meulink.xyz/abc123"
  }
  ```
- **Erros Comuns:**
  - `400 Bad Request`: Campo `long_url` ausente ou inválido.

---

### **2. Redirecionar URL**
**GET** `/{short_code}`

- **Descrição:** Redireciona o link curto para a URL original.
- **Exemplo:**
  - **Request:** `https://meulink.xyz/abc123`
  - **Resposta:** Redireciona para `https://exemplo.com/artigo/interessante`
- **Erros Comuns:**
  - `404 Not Found`: Código não encontrado no banco de dados.

---

### **3. Estatísticas (Opcional)**
**GET** `/api/stats/{short_code}`

- **Descrição:** Retorna estatísticas de uso do link curto.
- **Headers:**
  - `Authorization: Bearer {token}` (se autenticação estiver habilitada)
- **Resposta:**
  ```json
  {
      "short_code": "abc123",
      "long_url": "https://exemplo.com/artigo/interessante",
      "clicks": 42,
      "created_at": "2024-11-16T12:00:00Z"
  }
  ```
- **Erros Comuns:**
  - `401 Unauthorized`: Token inválido ou ausente.
  - `404 Not Found`: Código não encontrado.

---

## **Configuração do Ambiente**
### **1. Requisitos**
- Node.js (v14 ou superior) ou outra linguagem/framework configurado no projeto.
- Banco de Dados (ex.: MySQL, PostgreSQL ou MongoDB).

### **2. Instalação**
Clone o repositório:
```bash
git clone https://github.com/seu-usuario/link-shortener-api.git
cd link-shortener-api
```

Instale as dependências:
```bash
npm install
```

Configure o banco de dados e as variáveis de ambiente no arquivo `.env`:
```env
PORT=3000
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=link_shortener
BASE_URL=https://meulink.xyz
```

Inicie o servidor:
```bash
npm start
```

---

## **Estrutura do Projeto**
```
link-shortener-api/
├── src/
│   ├── controllers/
│   │   ├── linkController.js
│   │   └── statsController.js
│   ├── models/
│   │   └── linkModel.js
│   ├── routes/
│   │   └── api.js
│   └── server.js
├── .env
├── package.json
├── README.md
└── database.sql
```

---

## **Banco de Dados**
### **Tabela: links**
```sql
CREATE TABLE links (
    id INT AUTO_INCREMENT PRIMARY KEY,
    long_url TEXT NOT NULL,
    short_code VARCHAR(10) UNIQUE NOT NULL,
    clicks INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## **Contribuição**
Contribuições são bem-vindas! Siga os passos abaixo:
1. Faça um fork do repositório.
2. Crie um branch com sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m "Adiciona minha nova feature"
   ```
4. Faça o push para seu branch:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

---

## **Licença**
Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Se precisar de ajuda para adicionar ou modificar a documentação, estou à disposição! 🚀
