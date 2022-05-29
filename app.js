// var moshaJote = 16;   //numer
// var emriYt = "Arsen";   //string
// var emri = {emri: "Fation", mbiemri: "Curo" };   //objekti
// var truth = false;  //boolean
// var fruta = ["molle", "portokall", "banane"];  //matrica
// var random; //undefined

// var fruti = 'banane';
// var frutaTeTjera = 'banane/nmolle';
// console.log(fruti.length);
// console.log(fruti.indexOf('an'));
// console.log(fruti.slice(2, 6));
// console.log(fruti.replace('ban', '123'));
// console.log(fruti.toUpperCase());
// console.log(fruti.toLowerCase());
// console.log(fruti[2]);
// console.log(fruti.split(''));

var frutat = ['banane', 'molle', 'portokall', 'ananas'];
console.log(frutat[2]);
frutat[0] = 'dardhe';
console.log(frutat);

for (var i = 0; i<frutat.length; i++){
    console.log(frutat[i]);
}

//METODAT E ZAKONSHME TE MATRICAVE//

console.log('si string kemi', frutat.toString());
console.log(frutat.join('-'));
console.log(frutat.pop(), frutat);
console.log(frutat.pop('boronica '), frutat);
frutat[4] = 'frut i ri';
console.log(frutat);
frutat.shift();
console.log(frutat)
frutat.unshift('kivi');
console.log(frutat)


var perimet = ['spec', 'patate', 'domate'];
var frutatDhePerimet = frutat.concat(perimet);
console.log(frutatDhePerimet)