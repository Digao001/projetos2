const form = document.querySelector("form");
let botao = document.getElementById("btn");

botao.addEventListener("click", enviarDados);

function enviarDados(e){
e.preventDefault();

const nome = document.getElementById("nome").value;
const idade = document.getElementById("idade").value;
const msg = document.getElementById("msg").value;

if(nome.length === 0 || nome.length >= 15){
    alert("Nome só pode ter 15 caracteres");
    return
} else if(idade === "" || idade.length >= 3){
    alert("Idade só pode ter 2 números");
    return
} else if(msg.length < 10 || msg.length >= 150){
    alert("Limite máximo da mensagem é de 150 caracteres e o mínimo é de 10 caracteres");
    return
} else { 
    window.location = `
    https://api.whatsapp.com/send?phone=5531997707000&text=Olá me chamo: ${nome} \n Tenho: ${idade} anos \n Mensagem: ${msg}
    `;
}
}