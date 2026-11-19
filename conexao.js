import mysql from 'mysql2/promise';

// Criar POOL com os dados de acesso ao MYSQL local (XAMPP)

const pool = mysql.createPool({
    host: 'localhost', // Onde o banco esta rodando
    user: 'root',      // Usuário padrão do MySql local
    password:'',       // Senha (no xampp fica vazio)         
    database: 'db_escola', // Nome exato do banco
    connectionLimit:10   // Máximo de 10 conexoes simultaneas no pool
})

export default pool;

// connetionLimit: 10 = significa que até 10 consultas podem ser atendidas paralelamente sem sobrecarregar o banco.