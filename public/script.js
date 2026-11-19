const listaAlunos = document.getElementById ('listasAlunos')

async function carregarAlunos() {
    //  1. Faz uma requisiçãp GET para a rota "/alunos" do servidor
    const resposta = await fetch('/alunos')
    //  2. Transforma a resposta JSON em uma array de objetos
    const alunos = await resposta.json();
    //  3. Percorre cada aluno vindo do MySQL e cria um item <li> na tela
    for(let i = 0; i < alunos.length; i++){
        const aluno = alunos[i];
        const item = document.createElement('li');
        item.innerHTML = `<strong> ${aluno.nome} </strong>
        <span> ${aluno.curso} </span>`;
        listaAlunos.appendChild(item);
    }
}

carregarAlunos();