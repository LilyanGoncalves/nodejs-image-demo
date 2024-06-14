# nodejs-image-

# VERSÃO DOCKERFILE

# Instruções para Executar a Aplicação


1. Execute o banco de dados MySQL no docker:
   docker run -d --network app-network -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=user -e MYSQL_PASSWORD=123456 -e MYSQL_DATABASE=db_aula mysql:5.7

2. baixe a imagem mais recente
   docker pull lilyangoncalves/nodejs-image-demo:latest

3. Execute a aplicação:
   docker run --network app-network --name nodejs-image-demo -p 3000:3000 -d lilyangoncalves/nodejs-image-demo     

4. Acesse a URL da aplicação:
   http://localhost:3000/consulta-dados

5. O link do GitHub é https://github.com/LilyanGoncalves/nodejs-image-demo
   O link do DockerHub é https://hub.docker.com/repository/docker/lilyangoncalves/nodejs-image-demo


# VERSÃO DOCKER-COMPOSE

1. Execute o comando abaixo

    docker compose up



