// Lógica da calculadora

var saida = document.querySelector("output")

const limpar = () =>{
    saida.textContent = ""
}

const voltar = () =>{ 
    saida.textContent = `${saida.value.substring(0, saida.value.length -1)}`
}

const num = (n) =>{
    saida.value += n
}

const calc = () =>{
    if (saida.value.length != ""){
        saida.textContent = `${eval(saida.value)}`
    }
}

// Lógica dos botões Sun e Moon

const moon = () =>{
    document.body.classList.remove("sun")
    document.body.classList.add("moon")
}

const sun = () =>{
    document.body.classList.remove("moon")
    document.body.classList.add("sun")
}