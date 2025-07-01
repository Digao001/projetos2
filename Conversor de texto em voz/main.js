let text = document.getElementById("text");
let btn = document.querySelector("#btn");
let res = document.getElementById("resultado");

btn.addEventListener("click", ()=>{
    let voz = new SpeechSynthesisUtterance();
    voz.pitch = 1;
    voz.rate = 1;
    voz.text = text.value;
    window.speechSynthesis.speak(voz)

    res.textContent = text.value
})