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
            const nome1 = nome();
            const email1 = email();
            const telefone1 = telefone();
            contatoControlador.adicionarContato(nome1, email1, telefone1);
            break;
        case '2' :
            contatoControlador.listarContatos();
            break;
        case '3' :
            const nome3 = nome();
            contatoControlador.buscarContato(nome3);
            break;
        case '4' :
            const nome4 = nome();
            const email4 = email();
            const telefone4 = telefone();
            contatoControlador.atualizarContato(nome4, email4, telefone4);
            break;
        case '5' :
            const nome5 = nome();
            contatoControlador.removerContato(nome5);
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