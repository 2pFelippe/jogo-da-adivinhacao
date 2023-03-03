//Variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const onlyNumbers = new RegExp('^[0-9]+$')

let randomNumber = Math.round(Math.random() *10)
let attempts = 1;

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', pressEnterPlayAgain)

//Funções callback
function handleTryClick(e){
  e.preventDefault() // não faça o padrão

  const inputNumber = document.querySelector("#inputNumber")
  
  if(Number(inputNumber.value) == randomNumber){
    toggleScreen()
    screen2.querySelector("h2").innerText = `Você acertou em ${attempts} tentativas`
  }else if((inputNumber.value < 0 || inputNumber.value >10 || onlyNumbers.test(inputNumber.value) == false)){
    alert("Por favor, digite um número válido, que seja inteiro e positivo entre 0 e 10")
  }

  inputNumber.value = ""
  attempts++
}

function handleResetClick(){
  toggleScreen()
  attempts = 1
  randomNumber = Math.round(Math.random() *10)
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function pressEnterPlayAgain(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
}
