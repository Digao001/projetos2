let cep = document.getElementById("cep");
let btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    async function consultarCep() {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);

            let data = await response.json();

            for(valor in data){
                document.body.innerHTML += `<br> ${data[valor]}`
            }
        } catch (error) {
            console.log("Erro na api" + error)
        }
    }
    consultarCep()
})