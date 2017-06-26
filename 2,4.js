var assert = require("assert");

function superCoder(nombre, edad, ocupacion, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.ocupacion = ocupacion;
    this.genero = genero;
   this.mensaje = function mensaje(edad,ocupacion,genero){
        if(this.edad > 17 && this.ocupacion == ("Web Developer" || "Estudiante Laboratoria") && this.genero == "Femenino"){
            return ("You´re awesome");
        }else {
            return ("Upsiii");
        }
    }
    return this.mensaje();
}


describe("ALPHA 4",function(){
  it("Mensaje", function(){
    assert.equal("You´re awesome", superCoder("Kely",20, "Estudiante Laboratoria", "Femenino"));
  });
});

/*


*/
