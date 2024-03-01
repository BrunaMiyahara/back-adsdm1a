const Contato = require("./modelo");
const contatos = [];

function adicionarContato(nome, email, telefone) {
    let novoContato = new Contato(nome, email, telefone);
    contatos.push(novoContato);
}

function listarContatos(){
    contatos.forEach((contato) =>
    console.log(`nome: ${contato.nome} email: ${contato.email} telefone: ${contato.telefone}`));
}

function buscarContato(nome) {
    const buscou = contatos.find(contato => contato.nome === nome);
    if (buscou) {
        console.log(`nome: ${buscou.nome} email: ${buscou.email} telefone: ${buscou.telefone}`);
        return 0;
    } else {
        console.log("Contato não encontrado");
    }
}

function atualizarContato(nome, email, telefone) {
    if (buscarContato(nome)) {
        buscou.email = email;
        buscou.telefone = telefone;
    }
}

function removerContato(nome) {
    const posicao = contatos.findIndex((contato) => contato.nome === nome);
    if (posicao >= 0) {
        contatos.splice(posicao, 1);
    } else {
        console.log("Produto não encontrado");
    }
}

module.exports = {listarContatos, buscarContato, atualizarContato, removerContato};