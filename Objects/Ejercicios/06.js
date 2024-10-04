const contarPropiedades = (objeto) => {
    // Cuenta y retorna el total de propiedades que tiene el objeto.
    // PISTA: Puedes iterarlo usando el bucle for-in.
    // Tu código:
    var cuenta = 0;
    for (prop in objeto) {
        cuenta = cuenta + 1;
    }
    return cuenta;
};

module.exports = contarPropiedades;