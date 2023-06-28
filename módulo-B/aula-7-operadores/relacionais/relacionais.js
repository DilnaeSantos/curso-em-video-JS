var valor = Number(prompt('digite o valor'))

if (valor > 1000) {
    var descconto1 = valor - 100
    console.log(descconto1)
} else if (valor < 900) {
    var descconto2 = valor - 90
    console.log(descconto2)
} else if (valor >= 800) {
    var descconto3 = valor - 80
    console.log(descconto3)
} else if (valor <= 700) {
    var descconto4 = valor - 70
    console.log(descconto4)
} else if (valor == 600) {
    var descconto5 = valor - 60
    console.log(descconto5)
} 