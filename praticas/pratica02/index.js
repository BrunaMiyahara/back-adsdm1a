const readline =  require("readline-sync");
const contatoControlador = require("./controlador");

function menu() {
    console.log("1. Adicionar contato;");
    console.log("2. Listar contatos");
    console.log("3. Buscar contato");
    console.log("4. Atualizar contato");
    console.log("5. Remover contato;");
    console.log("6. Sair");
}

function escolherOpcao(opcao) {
    let nome = readline.question("nome: ");
    let email = readline.question("email: ");
    let telefone = readline.question("telefone: ");
    switch(opcao) {
        case '1' :
        contatoControlador.adicionarContato(nome, email, telefone);
        break;
        case '2' : 
        contatoControlador.listarContatos();
        break;
        case '3' :
        contatoControlador.buscarContato(nome);
        break;
        case '4' :
        contatoControlador.atualizarContato(nome, email, telefone);
        break;
        case '5' :
        contatoControlador.removerContato(nome);
        break;
        case '6' : process.exit(0);
        default: console.log('Opcao Invalida');
    }
}

function main () {
    while (true) {
        menu();
        const opcao = readline.question("Entre com uma opcao: ");
        escolherOpcao(opcao);
    }
}

main();