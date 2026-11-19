-- 1. Criar o banco de dados chamado "db_escola"
create database if not exists db_escola;

--2. Seleciona o banco para trabalhar dentro dele
use db_escola;

-- 3. Cria uma tabela simples chamada alunos
create table alunos (
    id int auto_increment not null primary key,
    nome varchar(100) not null,
    curso varchar(100) not null
 );

 -- 4. Insere 3 registros iniciais para termos o que buscar com o GET
 insert into alunos(nome, curso) values
 ('Ana Beatriz', 'Desenvolvimento Web'),
 ('Carlos Eduardo', 'Banco de Dados'),
 ('Marina Costa', 'Lógica de Programação');