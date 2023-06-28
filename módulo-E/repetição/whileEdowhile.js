// ele faz o teste primeiro e depois executa
var c = 1
while (c <= 10) {
    console.log(`passo ${c}`)
    c++
}


// ele executa primeiro e depois faz o teste
do {
    console.log(`passo ${c}`)
    c++
} while (c <= 10)