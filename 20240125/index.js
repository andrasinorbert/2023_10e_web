console.log("Betöltött");

function ki(x){
    console.log(x);
}

ki("szia");

function osszegzes_osszeadassal(lista){
    let s=0;
    for(let i =0; i<lista.length; i++){
        s+=lista[i];
    }
    return s;
}

let l=[1,2,3,4,5];
ki(osszegzes_osszeadassal(lista=[2,3,4]));
ki(osszegzes_osszeadassal(l));

function osszegzes_szorzassal(lista){
    let s=1;
    for(let i =0; i<lista.length; i++){
        s*=lista[i];
    }
    return s;
}

ki(osszegzes_szorzassal(l));

function osszegzes(lista, func){
    let s=lista[0];
    for(let i =1; i<lista.length; i++){
        s=func(s,lista[i]);
    }
    return s;
}

function osszead(num1, num2){
    return num1+num2;
}
function osszeszorzas(num1, num2){
    return num1*num2;
}

ki(osszegzes(l, osszead));
ki(osszegzes(l, osszeszorzas));

ki(osszegzes(l, function(num1, num2){
    return num1+num2;
}));

ki("***********");

ki(osszegzes(l, (num1, num2)=>{return num1+num2;}));
ki(osszegzes(l, (num1, num2)=>{return num1*num2;}));

function $(id){
    return document.getElementById(id);
}

function start(){
    //document.getElementById("alma").innerHTML=69;
    $("alma").innerHTML="valami";
  }

document.addEventListener("DOMContentLoaded", start
    );

