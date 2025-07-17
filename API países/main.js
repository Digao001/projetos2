let letrasIniciais = document.getElementById("letrasIniciais");
const result = document.querySelector(".result");
let busca = document.getElementById("busca")
const btn = document.getElementById("btn")


async function paises() {
    const resp = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags')
    const dados = await resp.json();


    //Filtro pela letra inicial//
    letrasIniciais.addEventListener("change", () => {
        result.innerHTML = "";
        let filtro = dados.filter((n) => {
            return n.name.common.toLowerCase().charAt(0).includes(`${letrasIniciais.value}`)
        })

        filtro.forEach((el, ind) => {

            let paisName = document.createElement("h1");
            result.appendChild(paisName);
            paisName.textContent = el.name.common;

            //Escolher pais//
            paisName.addEventListener("click", (e) => {

                result.innerHTML = "";

                result.innerHTML = `   
                    <img src=${el.flags.png}>
                    <h1>${el.name.common}</h1>
                    <span>Capital: </span><strong>${el.capital}</strong>
                `
            })

        })

    })

    ///Busca pelo input///
    btn.addEventListener("click", () => {
        const maiusculo = busca.value.charAt(0).toUpperCase() + busca.value.slice(1);
        const entrada = busca.value.trim().toLowerCase();
        const pais = dados.find(el => el.name.common.toLowerCase() === entrada);

        if (pais) {
            result.innerHTML = `
                <img src= ${pais.flags.png}>
                <h1>${maiusculo}</h1> 
                <span>Capital: </span><strong>${pais.capital ? pais.capital[0] : 'Sem capital'}</strong>
                `;
            busca.value = "";
        }

    })


}

paises()