const chaveApi = "aC4h1aCDOvAYvKUbvmqf4OYvkjhu4rc5TOVLZjNj"


const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");

let img = document.getElementById("img");
let video = document.getElementById("video");
let estado = img.dataset.state;

async function nasa() {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${chaveApi}`)

        if (!response.ok) throw new Error('Erro na resposta da API');
        const data = await response.json();

        console.log(data)
        verificarTipo(data)


    } catch (error) {
        console.error("Erro na api" + error)
    }
}
//Verifica se é uma imagem ou vídeo//
function verificarTipo(data) {
    if (data.media_type === "image") {
        img.src = data.url;
        img.style.display = "block";
        video.style.display = "none";
        titulo.textContent = data.title
        descricao.textContent = data.explanation;
    } else if (data.media_type === "video") {
        video.src = data.url;
        video.style.display = "block";
        img.style.display = "none";
        titulo.textContent = data.title
    }
    //Zoom na imagem//
    img.addEventListener("click", () => {
        estado = !estado;

        if (data.media_type === "image" && estado === true) {
            document.body.style.background = "black";
            img.style.transform = "scale(1.1)"
            img.style.position = "absolute"
            video.style.visibility = "hidden"
            titulo.style.visibility = "hidden"
            descricao.style.visibility = "hidden"
        } else if (data.media_type === "image" && estado === false) {
            document.body.style.background = "white"
            img.style.transform = "scale(1)"
            img.style.position = "static"
            video.style.visibility = "visible";
            titulo.style.visibility = "visible";
            descricao.style.visibility = "visible";
        }
    })
}


nasa()

