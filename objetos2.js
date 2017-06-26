/*
function suma (numInicial, numFinal){
  inicio= numInicial,
  final= numFinal,
    operacion = function(){
return((numFinal*(numFinal+1)/2) - (numInicial* (numInicial-1)/2));
  }
}

describe("ALPHA 1",function(){
  it("Suma de 1 hasta 10", function(){
    assert.equal(55, suma (1,10));
  });
});

*/


var assert = require("assert");

function sumar(numInicial, numFinal){
  inicio = numInicial,
  final = numFinal,
resultado =0;
    for(i = numInicial; i <=numFinal; i++){
    resultado += i;

  }
  return resultado;
}

describe("ejercicios", function(){
describe("ALPHA 1",function(){
  it("Suma de 1 hasta 15", function(){
    assert.equal(120, sumar (1,15));
  });
});
});
