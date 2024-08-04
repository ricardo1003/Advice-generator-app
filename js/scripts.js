const adviceNumberIDElement = document.getElementById("adviceID")
const adviceContentElement = document.getElementById("adviceMessage")
const reloadButton = document.getElementsByTagName("button")[0]

function newAdvice(){
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        adviceNumberIDElement.innerHTML = data.slip.id
        adviceContentElement.innerHTML = data.slip.advice
      })
    .catch(error => console.error('Error al cargar el JSON:', error))
}
newAdvice()

reloadButton.addEventListener("click", ()=>{
    newAdvice()
})