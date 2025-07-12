const opcao = ["pedra", "papel", "tesoura"];
const result = document.querySelector(".result");
let escolha = document.getElementById("escolher");
let btn = document.getElementById("btn");
let winner = document.getElementById("winner");
let loser = document.getElementById("loser");
let draw = document.getElementById("draw");
let empate = 0;
let vitoria = 0;
let derrota = 0;

btn.addEventListener("click", iniciar)

function iniciar() {
    if(!escolha || escolha.value.trim() === ""){
        alert("Escolha uma opção");
        return;
    }
    let random = Math.floor(Math.random() * 3)

    switch (true) {
        case escolha.value.toLowerCase() === opcao[random]:
            alert("Empate");
            empate++;
            draw.textContent = `Empate: ${empate}`;
            escolha.value = "";
            break;

        case escolha.value.toLowerCase() === "pedra" && opcao[random] === "papel":
            alert("Computador venceu \n Papel > Pedra");
            derrota++;
            loser.textContent = `Derrota: ${derrota}`;
            escolha.value = "";
            break;

        case escolha.value.toLowerCase() === "papel" && opcao[random] === "pedra":
            alert("Você venceu \n Papel > Pedra");
            vitoria++;
            winner.textContent = `Vitoria: ${vitoria}`;
            escolha.value = "";
            break;

        case escolha.value.toLowerCase() === "tesoura" && opcao[random] === "pedra":
            alert("Computador venceu \n Pedra > Tesoura");
            derrota++;
            loser.textContent = `Derrota: ${derrota}`;
            escolha.value = "";
            break;

        case escolha.value.toLowerCase() === "pedra" && opcao[random] === "tesoura":
            alert("Você venceu \n Pedra > Tesoura");
            vitoria++;
            winner.textContent = `Vitoria: ${vitoria}`;
            escolha.value = "";
            break;

        case escolha.value.toLowerCase() === "papel" && opcao[random] === "tesoura":
            alert("Computador venceu \n Tesoura > Papel");
            derrota++;
            loser.textContent = `Derrota: ${derrota}`;
            escolha.value = "";
            break;

        case escolha.value.toLowerCase() === "tesoura" && opcao[random] === "papel":
            alert("Você venceu \n Tesoura > Papel");
            vitoria++;
            winner.textContent = `Vitoria: ${vitoria}`;
            escolha.value = "";
            break;

    }
}
