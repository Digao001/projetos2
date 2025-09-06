let card = document.querySelector(".card-container");
let mais = document.getElementById("mais");
let start = 0;
let maisCartas = 20; //flag para carregar mais cartas//
const yugiOh = async () => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php`)
        .then((data) => data.json())
        .then((objeto) => {
             
            objeto.data.slice(start, start + maisCartas).forEach((elemento) => {
                const { //Desestrutura os dados do objeto//
                    name, 
                    attribute, 
                    level, 
                    race, 
                    atk, 
                    def, 
                    archetype, 
                    type, 
                    ygoprodeck_url 
                } = elemento; 
                const imageUrl = elemento.card_images[0].image_url;
                
                card.innerHTML += `
                <div class="card">
                    <h2>${name}</h2>
                    <div class="img">
                        <img src="${imageUrl}" alt="${name}">
                    </div>
                    <div class="info"><span class="label">Atributo:</span> ${attribute ? attribute : "Nenhum"}</div>
                    <div class="info"><span class="label">Nível:</span> ${level ? "⭐".repeat(level) : "-"}</div>
                    <div class="info"><span class="label">Raça:</span> ${race}</div>
                    <div class="info"><span class="label">ATK:</span> ${atk ? atk : "-"}</div>
                    <div class="info"><span class="label">DEF:</span> ${def ? def : "-"}</div>
                    <div class="info"><span class="label">Arquetipo:</span> ${archetype ? archetype : "-"}</div>
                    <div class="info"><span class="label">Tipo:</span> ${type}</div>
                    <div class="link">
                        <a href="${ygoprodeck_url}" target="_blank">Ver no YGOPRODeck</a>
                    </div>
                </div>
                `;
            });
        });
        
};

yugiOh(); // chamada inicial

mais.addEventListener("click", () => {
    start += maisCartas
    yugiOh(); // substitui as cartas ao clicar
});
