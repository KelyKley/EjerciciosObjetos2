function datos(nombre, apellido, edad, genero, ciudad, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.ciudad = ciudad;
    this.pais = pais;
    this.ficha = function mostrarFicha(nombre,apellido,edad,pais){
        return ("Nombre: " + this.nombre + " " + this.apellido + "\n" + "Edad: " + this.edad + "\n" + "País: " + this.pais);
    }
    return this.ficha();
};

describe("ALPHA 3",function(){
  it("Ficha", function(){
    assert.equal("Nombre: Kely Añamuro"  + "\n" + "Edad: 18" + "\n" + "País: Perú" , datos("Kely", "Añamuro", 20, "Femenino", "Arequipa", "Perú"));
  });
});
