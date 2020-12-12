# node_nginx
Utilização do nginx como proxy reverso. Quando o usuario acessar a aplicação em: "localhost:8080"(nginx), o ngix fará uma chamada na aplicação node na porta 3000. Essa aplicação adicionará um registro no BD mysql, cadastrando um nome na tabela people. Para rodar, basta entrar no terminal no projeto e digitar: docker-compose up -d.
