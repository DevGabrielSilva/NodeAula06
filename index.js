import express from 'express';
import pool from './conexao.js'

const app = express();
const PORTA = 3000;

app.use(express.static('public'))

app.listen(PORTA, ()=>{
    console.log(`Servidor rodando! Acesse: http://localhost:${PORTA}`)
})

app.get('/alunos', async (req, res) =>{
    // 1. Executa o comando SELECT no banco usando o pool
    // O msql2 retorna em uma array (lista)
    const [linhas] = await pool.query('SELECT * from alunos')
    res.json(linhas);
})