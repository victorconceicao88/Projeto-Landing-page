setadireita = window.document.getElementById("seta-direita")
setaesquerda = window.document.getElementById("seta-esquerda")
var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")

function rolarparadireita(){
    leonardo.style = "display:none"        // quando clicar para direita o leonardo some
    bruna.style = "display:flex"            // quando clicar para direita a bruna aparece
    setadireita.style ="display:none"          // seta direita some    
    setaesquerda.style ="display:flex; margin-top:110%"     // seta esquerda aparece para voltar
}

function rolarparaesquerda(){
    leonardo.style = "display:flex"          // quando clicar para esquerda o leonardo aparece
    bruna.style = "display:none"             // quando clicar para direita a bruna aparece
    setadireita.style ="display:flex"        // a seta direita aparece     
    setaesquerda.style ="display:none;margin-top:110%" // a seta esquerda some
}