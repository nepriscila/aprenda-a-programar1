let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};


if (produtoA.internacional == true) {

    console.log("O produto é internacional")
    console.log("O valor com imposto é: ", produtoA.valor + produtoA.valor * 0.2)

} else{

    console.log("O produto é nacional")
    console.log("O valor com imposto é: ", produtoA.valor + produtoA.valor * 0.12)

}


if (produtoB.internacional == true) {

    console.log("O produto é internacional")
    console.log("O valor com imposto é: ", produtoA.valor + produtoA.valor * 0.2)

} else{

    console.log("O produto é nacional")
    console.log("O valor com imposto é: ", produtoB.valor + produtoB.valor * 0.12)

}


if (produtoC.internacional == true) {

    console.log("O produto é internacional")
    console.log("O valor com imposto é: ", produtoA.valor + produtoA.valor * 0.2)

} else{

    console.log("O produto é nacional")
    console.log("O valor com imposto é: ", produtoC.valor + produtoC.valor * 0.12)

}