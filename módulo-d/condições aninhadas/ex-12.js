var time = new Date()
var hora = time.getHours()

if (hora < 12) {
    console.log('bom dia')
} else if (hora <= 18) {
    console.log('boa tarde')
} else {
    console.log('boa noite')
}