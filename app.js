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

// var frutat = ['banane', 'molle', 'portokall', 'ananas'];
// console.log(frutat[2]);
// frutat[0] = 'dardhe';
// console.log(frutat);

// for (var i = 0; i<frutat.length; i++){
//     console.log(frutat[i]);
// }

//METODAT E ZAKONSHME TE MATRICAVE//

// console.log('si string kemi', frutat.toString());
// console.log(frutat.join('-'));
// console.log(frutat.pop(), frutat);
// console.log(frutat.pop('boronica '), frutat);
// frutat[4] = 'frut i ri';
// console.log(frutat);
// frutat.shift();
// console.log(frutat)
// frutat.unshift('kivi');
// console.log(frutat)


// var perimet = ['spec', 'patate', 'domate'];

// var frutatDhePerimet = frutat.concat(perimet);
// console.log(frutatDhePerimet)
// console.log(frutatDhePerimet.slice(1, 4));
// console.log(frutatDhePerimet.reverse());
// console.log(frutatDhePerimet.sort());

// let nxenesi ={
//     emri:'Fation',
//     mbiemri:'Curo',
//     mosha:16,
//     gjatesia:180, 
// };
// console.log(nxenesi.emri)
// console.log(nxenesi.mbiemri)
// console.log(nxenesi.mosha)
// console.log(nxenesi.gjatesia)


// let mosha = prompt('Sa vjec mendoni se jam?');
// if (mosha==16){
// document.write('Ti e gjete!');
// } else  {
//     document.write('Me vjen keq, Provoni perseri!.')
// }

function moshaNeDite(){
    let ditelindja = prompt('Ne cilin vit ke lindur');
    let llogaritja = (2022 - ditelindja ) * 365;
    let h1 = document.createTextNode('Ti ke jetuar' + llogaritja + 'dite');
    h1.setAttribute('id', 'moshaNeDite');
    h1.appendChild(pergjigja);
    document.getElementById('flex-box-result').appendChild(h1);

}

function rivendosja