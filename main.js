const btn = document.getElementById("ligar")
const titles = document.getElementsByClassName("titulos")

btn.onclick = () => {
    Array.from(titles).forEach((element, index) => {
        element.innerHTML = "Funcionou"
    })
}