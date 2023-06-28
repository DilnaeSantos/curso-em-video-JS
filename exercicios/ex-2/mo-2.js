function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.valu) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero =  'homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', '../fotos/ex-2/menino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', '../fotos/ex-2/joven-homem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', '../fotos/ex-2/homem-adulto.jpg')
            } else {
                img.setAttribute('src', '../fotos/ex-2/idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', '../fotos/ex-2/menina.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', '../fotos/ex-2/joven-mulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', '../fotos/ex-2/mulher-adulta.jpg')
            } else {
                img.setAttribute('src', '../fotos/ex-2/idosa.jpg')
            }
        }
        res.st
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}