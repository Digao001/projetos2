export function menu() {
    let menu = document.getElementById("menu");
    let itens = [document.querySelectorAll(".hidden")]
    menu.addEventListener("click", () => {
        for (let item of itens) {
            item.forEach((element, ind) => {
                setTimeout(() => {
                    element.classList.toggle("show")
                }, 120 * ind)

            })

        }
    })
}