const receitas = ["Brigadeiro", "Torta de morango", "Bolo de canela"];

const telaLogin = document.getElementById("tela-login");
const telaLista = document.getElementById("tela-lista");
const campoUsuario = document.getElementById("usuario");
const campoSenha = document.getElementById("senha");
const botaoLogin = document.getElementById("botao-login");
const mensagemLogin = document.getElementById("mensagem-login");

const campoReceita = document.getElementById("nova-receita");
const botaoInicio = document.getElementById("botao-inicio");
const botaoFinal = document.getElementById("botao-final");
const mensagemReceita = document.getElementById("mensagem-receita");
const listaReceitas = document.getElementById("lista-receitas");

function fazerLogin() {
    const usuario = campoUsuario.value;
    const senha = campoSenha.value;

    if (usuario === "" || senha === "") {
        mensagemLogin.innerText = "Preencha usuário e senha";
        return;
    }

    if (usuario == "aluno" && senha == "fiap2025") {
        mensagemLogin.innerText = "";
        telaLogin.classList.add("escondido");
        telaLista.classList.remove("escondido");
        mostrarReceitas();
    } else {
        mensagemLogin.innerText = "Usuario ou senha incorretos";
    }
}

function mostrarReceitas() {
    listaReceitas.innerHTML = "";

    for (let i = 0; i < receitas.length; i++) {
        listaReceitas.innerHTML +=
            "<li class='item-receita'>" +
                "<span class='nome-receita'>" + (i + 1) + ". " + receitas[i] + "</span>" +
                "<div class='botoes-item'>" +
                    "<button class='botao-editar' onclick='editarReceita(" + i+ ")'><i class='bx bx-edit'></i> Editar</button>" +
                    "<button class='botao-remover' onclick='removerReceita("+ i +")'><i class='bx bx-trash'></i> Remover</button>" +
                "</div>" +
            "</li>";
    }
}

function adicionarNoFinal() {
    const novaReceita = campoReceita.value;

    if (novaReceita === "") {
        mensagemReceita.innerText = "Digite o nome da receita";
        return;
    }

    receitas.push(novaReceita);
    mensagemReceita.innerText = "";
    limparCampoReceita();
    mostrarReceitas();
}

function adicionarNoInicio() {
    const novaReceita = campoReceita.value;

    if (novaReceita === "") {
        mensagemReceita.innerText = "Digite o nome da receita";
        return;
    }

    receitas.unshift(novaReceita);
    mensagemReceita.innerText = "";
    limparCampoReceita();
    mostrarReceitas();
}

function editarReceita(posicao) {
    const receitaEditada = prompt("Editar receita:", receitas[posicao]);

    if (receitaEditada === null || receitaEditada === "") {
        mensagemReceita.innerText = "A receita original foi mantida";
        return;
    }

    receitas[posicao] = receitaEditada;
    mensagemReceita.innerText = "";
    mostrarReceitas();
}

function removerReceita(posicao) {
    receitas.splice(posicao, 1);
    mensagemReceita.innerText = "";
    mostrarReceitas();
}

function limparCampoReceita() {
    campoReceita.value = "";
}

botaoLogin.addEventListener("click", fazerLogin);
botaoFinal.addEventListener("click", adicionarNoFinal);
botaoInicio.addEventListener("click", adicionarNoInicio);