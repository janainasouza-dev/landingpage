# Usar imagem Node.js leve (Alpine)
FROM node:18-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o resto do projeto
COPY . .

# Expor a porta do Vite
EXPOSE 3000

# Comando para rodar em desenvolvimento
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
