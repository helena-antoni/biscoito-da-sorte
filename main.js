
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const btnLucky = document.querySelector('#btn-lucky')
const btnLuckyReset = document.querySelector('#btn-lucky-reset')
const phraseChosen = document.querySelector('#message')

btnLucky.addEventListener('click', handleClick)
btnLuckyReset.addEventListener('click', handleResetClick)   


function handleClick(event){
    event.preventDefault()

    toggleScreen() 
    arrayOfPhases()
    
}

function handleResetClick(){
    toggleScreen()
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}


function keyPressEnter(e){

}

function arrayOfPhases(){
    
    let frasesBiscoitoDaSorte = [
        "A sorte favorece os audazes.", 
        "O amor verdadeiro está a caminho.",
        "Você está destinado ao sucesso.",
        "A paciência é uma virtude recompensadora.",
        "Novas oportunidades surgirão em breve.",
        "Confie na sua intuição.",
        "A felicidade é um caminho, não um destino.",
        "Seus esforços serão recompensados.", 
        "Você está prestes a embarcar em uma nova aventura.",
        "O conhecimento é a chave para o sucesso.", 
        "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.", 
        "A sorte sorri para quem persiste." 
    ];

    const randomElement = frasesBiscoitoDaSorte[Math.floor(Math.random() * frasesBiscoitoDaSorte.length)];
    phraseChosen.querySelector('p').innerHTML = (randomElement)
}