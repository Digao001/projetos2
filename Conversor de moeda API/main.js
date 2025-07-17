let valor = document.getElementById("valor")
let selectDe = document.getElementById("selectDe");
let selectPara = document.getElementById("selectPara");
let result = document.getElementById("result");
data = "";
async function converter() {
    try {
        const resposta = await fetch(`https://api.frankfurter.app/latest?amount=${valor.value}&from=${selectDe.value}&to=${selectPara.value}`);

        const data = await resposta.json();
        console.log(data)


        switch(true){
            case selectDe.value === "USD": 
             result.innerHTML = `${valor.value} Dólares Equivalem a ${data.rates[selectPara.value]} ${selectPara.value}`;
             break;

             case selectDe.value === "EUR": 
             result.innerHTML = `${valor.value} Euros Equivalem a ${data.rates[selectPara.value]} ${selectPara.value}`;
             break;

             case selectDe.value === "BRL": 
             result.innerHTML = `${valor.value} Reais Equivalem a ${data.rates[selectPara.value]} ${selectPara.value}`;
             break;
             
             case selectDe.value === "JPY": 
             result.innerHTML = `${valor.value} Reais Equivalem a ${data.rates[selectPara.value]} ${selectPara.value}`;
             break;

        }

    } catch (error) {
        console.error("Falha na api" + error);
    }
}

selectPara.addEventListener("change", selectP);
function selectP(){
    if(selectPara.value === "Nenhum"){
        result.innerHTML = ``
    } 
                  
    converter();
}

