function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        img.src = '../fotos/ex-1/manhan foto.jpg'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Bom Dia`
    } else if (hora >= 12 && hora < 18) {
        img.src = '../fotos/ex-1/tarde foto.jpg'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Boa tarde`
    } else {
        img.src = '../fotos/ex-1/noite.jpg'
        document.body.style.background = '#515154'
        msg.innerHTML = `Boa Noite`
    }
}