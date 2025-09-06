function IniciarPincel() {
    flagPincel =! flagPincel;
    pincel.textContent = "Remover pincel";
    if(flagPincel){
                
        pintarMouse = (e)=>{//Pega os elementos na direçao do mouse//
            const elementos = document.elementsFromPoint(e.clientX, e.clientY);
            const pixel = elementos.find(el => el.classList?.contains("pixels"));
            const cor = document.getElementById("cor").value;
            if (pixel) {
                pixel.style.backgroundColor = cor;
                pixel.classList.add("select");
            }
    
        }
          
        window.addEventListener("mousemove", pintarMouse);
    }  else {
        pincel.textContent = "Ativar Pincel 🖌️";
        if (pintarMouse) {
            
            window.removeEventListener("mousemove", pintarMouse);
        }
    
}}