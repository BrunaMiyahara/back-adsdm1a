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

function nome() {
    const nome = readline.question("nome: ");
    return nome
}

function email() {
    const email = readline.question("email: ");
    return email
}

function telefone() {
    const telefone = readline.question("telefone: ");
    return telefone;
}
    
function escolherOpcao(opcao) {
    switch(opcao) {
        case '1' :
            contatoControlador.adicionarContato(nome(), email(), telefone());
            break;
        case '2' :
            contatoControlador.listarContatos();
            break;
        case '3' :
            contatoControlador.buscarContato(nome());
            break;
        case '4' :
            contatoControlador.atualizarContato(nome(), email(), telefone());
            break;
        case '5' :
            contatoControlador.removerContato(nome());
            break;
        case '6' :
            process.exit(0);
        default: 
            console.log('Opcao Inválida');
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