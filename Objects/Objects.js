// Para declarar un objeto se asigna apertura y cierre de llaves
// los elementos del objeto tienen una estructura par clave : valor
// cada par clave : valor debe estar separado por una coma , 
// en este ejemplo los elementos del objeto son arreglos 
var deportes = {
    conBalon: ['Footbal', 'Basketball', 'Rugby'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};

// ejemplo de objeto persona
// uno de sus elementos es otro objeto estudios
var persona = {
    nombre: 'Lucas',
    edad: 26,
    estudios: { esProgramador: true },
};
console.log(persona.edad);
// cambia el nombre de la persona
persona.nombre = "Martín";
console.log(persona.nombre);
// cambia la edad de la persona
persona.edad = 32;
console.log(persona.edad);

// Cómo crear nuevas propiedades en un objeto
// Por ejemplo crea el objeto autos vacío
var autos = {};
//Le agrega al objeto autos las propiedades marcas que es un arreglo
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

//Como eliminar propiedades de un objeto
//se usa la palabra reservada delete
// por ejemplo elimina la propiedad marcas del objetos auto
delete autos.marcas;
console.log(autos);

//Dentro de las propiedades de un objeto podemos guardar una función 
// por ejemplo creamos un objeto misFunciones 
var misFunciones = {
    saludar: function () {
        console.log("Hola");
    },
}
// invoca a la funcion saludar
misFunciones.saludar();

var atuendos = {
    manos: ['Guantes', 'Anillos'],
    pies: ['Zapatos', 'Soquetes'],
}
console.log(atuendos.manos);

// Bracket Notation Notación por corchetes
atuendos["piernas"] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
    //comidas.propUno = ["Frutas", "Vegetales"];
    comidas[propUno] = ["Frutas", "Vegetales"];
    //comidas["propDos"] = ['Hamburguesas', 'Papas Fritas'];
    comidas[propDos] = ['Hamburguesas', 'Papas Fritas'];
};
diferenciaDeNotaciones('Saludable', 'NoSaludable');
console.log(comidas);

var libro = {
    autor: 'Borges',
    genero: 'Policial',
    año: 1990,
}
var tienePropiedad = libro.hasOwnProperty('nombre');
console.log(tienePropiedad);
tienePropiedad = libro.hasOwnProperty('autor');
console.log(tienePropiedad);

var todaslasPropiedades = Object.keys(libro);
console.log(todaslasPropiedades);

//metodo de Object for in para recorrer las propiedades del objeto
var mundo = {
    continentes: 7,
    paises: 195,
    oceanos: 5
}
for (var prop in mundo) {
    console.log("Esta es la propiedad " + prop);
    console.log("Este es el valor " + mundo[prop]);
}

// Objeto This
var mascota = {
    animal: "Perro",
    raza: "Ovejero Alemán",
    amistoso: true,
    dueña: "Maria Lopez",
    info: function () {
        console.log("Mi perro es un " + this.raza);
    },
}
mascota.info();
