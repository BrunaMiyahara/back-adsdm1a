const Contato = require("./modelo");
let contatos = [];

function adicionarContato(nome, email, telefone) {
    let novoContato = new Contato(nome, email, telefone);
    contatos.push(novoContato);
}

function listarContatos(){
    contatos.forEach((contato) =>
    console.log(`Nome: ${contato.nome} Email: ${contato.email} Telefone: ${contato.telefone}`));
    if (contatos.length == 0){
        console.log("Não há contatos")
    }
}

function buscarContato(nome) {
    const buscou = contatos.find(contato => contato.nome === nome);
    if (buscou) {
        console.log(`Nome: ${buscou.nome} Email: ${buscou.email} Telefone: ${buscou.telefone}`);
        return 0;
    } else {
        console.log("Contato não encontrado");
    }
}

function atualizarContato(nome, email, telefone) {
    if (buscarContato(nome) == 0) {
        const buscou = contatos.find(contato => contato.nome === nome);
        buscou.email = email;
        buscou.telefone = telefone;
        console.log(`Contato atualizado para: Nome: ${buscou.nome} Email: ${buscou.email} Telefone: ${buscou.telefone}`)
    }
}

function removerContato(nome) {
    const posicao = contatos.findIndex((contato) => contato.nome === nome);
    if (posicao >= 0) {
        contatos.splice(posicao, 1);
        console.log("Contato removido")
    } else {
        console.log("Contato não encontrado");
    }
}

module.exports = {adicionarContato, listarContatos, buscarContato, atualizarContato, removerContato};