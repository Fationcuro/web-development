function prova(){
    alert('Ky esht nje fubnksion');
}

prova();


function greeting(){
    var name = prompt('Si e ke emrin?');
    var result = 'Pershendetje' + ' ' + name;
    console.log(result)
}
// greeting();

function shumaeNumrave(n1, n2){
    var result = n1 + n2;
    console.log(result);
}

shumaeNumrave(50, 40);

var num = 0;
while(num<100){
    num +=1;
    console.log(num)
}