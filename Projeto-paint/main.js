let novoDesenho = document.getElementById("novo");
let quadro = document.getElementById("quadro");
let tamanhoQuadro = 503; ///Tamanho da grade///
let pincel = document.getElementById("pincel");
let grade = document.getElementById("grade");
let formas = document.getElementById("formas");
let flag = false;
let flagPincel = false;
let pintarMouse = null;

novoDesenho.addEventListener("click", () => window.location.reload()); ///Evento que inicia o desenho///
grade.addEventListener("click", adicionarRemover); ///Add remove grade///
quadro.addEventListener("click", selecionaExclui); ///Seleciona e exclui ao clicar///
pincel.addEventListener("click", IniciarPincel); ///Ativa o modo pincel///
formas.addEventListener("click", mudarForma);
window.onload = () => iniciarDesenho(); //Inicia o desenho//
/////
function iniciarDesenho() {//Cria a grade//
    quadro.innerHTML = "";
    for (let i = 0; i <= tamanhoQuadro; i++) {

        let pixels = document.createElement("span");
        quadro.append(pixels);
        pixels.classList.add("pixels");
    }
}
/////
function selecionaExclui(e) {
    let cor = document.getElementById("cor").value;
    if (e.target.classList.contains("pixels")) {
        e.target.classList.toggle("select");

        if (e.target.classList.contains("select")) {
            e.target.style.backgroundColor = cor;
        } else {
            e.target.style.backgroundColor = "white";
        }
    }
};
/////
function adicionarRemover() {
    let addRemove = document.querySelectorAll(".pixels");
    flag = !flag;
    addRemove.forEach((bloco) => bloco.style.border = flag ? "1px solid" : "none");

}
/////
function IniciarPincel() {
    flagPincel = !flagPincel;
    pincel.textContent = "Remover pincel";
    if (flagPincel) {

        pintarMouse = (e) => {//Pega os elementos na direçao do mouse//
            const elementos = document.elementsFromPoint(e.clientX, e.clientY);
            const pixel = elementos.find(el => el.classList?.contains("pixels"));
            const cor = document.getElementById("cor").value;
            if (pixel) {
                pixel.style.backgroundColor = cor;
                pixel.classList.add("select");
            }

        }

        window.addEventListener("mousemove", pintarMouse);
    } else {
        pincel.textContent = "Ativar Pincel";
        if (pintarMouse) {

            window.removeEventListener("mousemove", pintarMouse);
        }

    }
}
/////
function mudarForma() {
    const formato = document.querySelectorAll(".pixels");
    
    const forma = formato.forEach((objeto) => {
        switch (formas.value) {
            case "circulo":
                objeto.style.borderRadius = "50%";
                objeto.style.transform = "none";
                break;

            case "quadrado":
                objeto.style.borderRadius = "0";
                objeto.style.transform = "none";
                break;

            case "losango":
                objeto.style.transform = "rotate(45deg)";
                break;

                case "padrao":
                objeto.style.borderRadius = "0";
                objeto.style.transform = "none";
                break;
        }



    })
}