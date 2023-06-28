// getElementsByTagName()

var p1 = document.getElementsByTagName('p')[0] // o zero e para selecionar o primeiro p q aparece se colocar o 1 pega o segundo p
document.write(`pequei o primeiro p ${p1.innerText}`) // ele vai escrever o p junto com o q eu escrevi
p1.style.fontSize = '30px'

var corpo = document.body
corpo.style.background = 'orange'