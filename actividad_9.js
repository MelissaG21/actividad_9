
const Invertir = () => {
    let valorI, valorF;
    valorI = document.getElementById("valor");
    valorF = valorI.value.split('').reverse().join('')
    document.getElementById("valorFinal").innerHTML=valorF;
}
