function sumarArray(arrayOfNumbers, cb) {
    // Recibes un arreglo de números y un callback.
    // Suma todos los números del arreglo.
    // Este resultado debes pasárselo como argumento al callback recibido.
    // NOTA: no debes retornar nada.
    // Tu código:
    var cuenta = 0;
    for (prop in arrayOfNumbers) {
        cuenta = cuenta + arrayOfNumbers.prop;
    }
    cb(cuenta);
}

module.exports = sumarArray;