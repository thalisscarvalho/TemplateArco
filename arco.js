var img  = document.getElementById('compo')
var img2 = document.getElementById('recu')
var img3 = document.getElementById('trad')
var res  = document.getElementById('arco1')
var res2 = document.getElementById('arco2')
var res3 = document.getElementById('arco3')
var fundo= document.getElementById('composto1')
var fundo2= document.getElementById('composto2')
var fundo3= document.getElementById('composto3')
//ARCO 1
function entro(){
    img.style.width = '350px'
    img.style.transitionDuration = '1s'
    res.innerHTML = 'Modelo de arco mais moderno e tecnológico, com varias configurações e acessórios.'
    res.style.transitionDuration = '1s'
    res.style.padding = '10px'
    res.style.margin = '20px'
    res.style.left = '20px'
    fundo.style.backgroundPosition ='top'
    fundo.style.transition = '1s'
    fundo.style.backgroundImage = 'url(imags/fc.jpg)'
    fundo.style.backgroundPosition ='top'
}
function saiu(){
    img.style.width = '300px'
    res.innerHTML = ''
    res.style.transitionDuration = '1s'
    res.style.left = '-100px'
    fundo.style.transitionDuration = '1s'
    img.src = 'imags/arcomp.png'
    img.style.transitionDuration = '1s'
    fundo.style.transition = '1s'
    fundo.style.backgroundPosition =''
    fundo.style.transition = '1s'
}
//ARCO 2 Recurvo
function entro2(){
    img2.style.width = '350px'
    img2.style.height = '330px'
    img2.style.transitionDuration = '1s'
    res2.innerHTML = 'Modelo com laminas curvadas em suas extremidades, lembrando a forma de um <strong>S</strong..'
    res2.style.transitionDuration = '1s'
    res2.style.padding = '10px'
    res2.style.left = '-50px'
    fundo2.style.transition = '1s'
    fundo2.style.backgroundPosition = 'center'
}
function saiu2(){
    img2.style.width = '300px'
    img2.style.height = '300px'
    res2.innerHTML = ''
    res2.style.left = '-100px'
    fundo2.style.backgroundSize = '100%'
    fundo2.style.transition = '1s'
    fundo2.style.backgroundPosition ='top'
}
//ARCO3 Tradicional
function entro3(){
    img3.style.width = '350px'
    img3.style.height = '330px'
    img3.style.transitionDuration = '0.5s'
    res3.innerHTML = 'Modelo antigo, o  arco tradicional de referência mundial é o arco huno.'
    res3.style.transitionDuration = '1s'
    res3.style.padding = '10px'
    res3.style.margin = '20px'
    res3.style.left = '-20px'
    fundo3.style.backgroundPosition ='top'
    fundo3.style.transition = '1s'
    fundo3.style.backgroundPosition ='center'
}
function saiu3(){
    img3.style.width = '300px'
    img3.style.height = '300px'
    fundo3.transitionDuration  = '0.5s'
    res3.innerHTML = ''
    res3.style.left = '-100px'
    fundo3.style.backgroundPosition ='top'
}