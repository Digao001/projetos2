import { menu } from './menu.js';
window.addEventListener("DOMContentLoaded", () => {
    menu()
})

const inputFile = document.getElementById("inputFile");
let menuInterativo = document.querySelector(".menu");
let img = document.getElementById("imagem")
let borderR = document.getElementById("range");
let text = document.getElementById("text");
let nomeArquivo = "";
let urlTemp = "";

inputFile.addEventListener("change", () => {
    const imagem = inputFile.files[0];
    urlTemp = URL.createObjectURL(imagem);
    nomeArquivo = imagem.name;
    text.innerText = nomeArquivo
    img.src = urlTemp;



    img.onload = () => {
        URL.revokeObjectURL(urlTemp);
        if (img) {
            range.style.display = "block";
            menuInterativo.style.display = "block";
        } else {
            range.style.display = "none";
            menuInterativo.style.display = "none";
        }

    }
})


function editar() {
    //Bordas//
    let rangeBorda = document.getElementById("rangeBorda");
    let colorBorda = document.getElementById("colorBorda");
    //Sombra//
    let sombraBorda = document.getElementById("rangeSombra");
    let corSombra = document.getElementById("corSombra");
    //Altura e largura//
    let altura = document.getElementById("altura");
    let btnAltura = document.getElementById("okAltura");
    let largura = document.getElementById("largura");
    let btnLargura = document.getElementById("okLargura");

    //BorderRadius//
    borderR.addEventListener("change", () => {
        img.style.borderRadius = borderR.value + "%"
    });

    //Tamanho borda e cor da borda//

    rangeBorda.addEventListener("change", () => {
        img.style.borderStyle = "solid"
        img.style.borderWidth = rangeBorda.value + "px";
    })
    colorBorda.addEventListener("change", () => {
        img.style.borderColor = colorBorda.value;
    })

    //Sombra da imagem//
    sombraBorda.addEventListener("change", () => {
        img.style.boxShadow = `${sombraBorda.value + "px"} ${sombraBorda.value + "px"} ${sombraBorda.value + "px"} ${sombraBorda.value + "px"} ${corSombra.value}`;
    })

    //Altura e largura//

    btnAltura.addEventListener("click", () => {
        if (altura.value < 100 || altura.value > 800) {
            alert("Valor mínimo ou máximo alcançado, defina um novo valor")
            return;
        } img.style.height = altura.value + "px";
    })

    btnLargura.addEventListener("click", () => {
        if (largura.value < 100 || largura.value > 800) {
            alert("Valor mínimo ou máximo alcançado, defina um novo valor")
            return;
        } img.style.width = largura.value + "px";
    })
    
}

editar()