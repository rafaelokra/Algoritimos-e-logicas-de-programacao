/*
    Capture 10 items para compor a lista de um supermecado.

    Apos capturar os 10 items, imprima-os, separando por virgula.
*/
 
let items = [];

for(let item = 0; item < 10; item++){
    let itemName = prompt("digite o item " + (item + 1))

    items[item] = itemName
}

    alert(items)