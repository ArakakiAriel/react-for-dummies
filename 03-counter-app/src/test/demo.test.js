describe('Pruebas en el archivo demo.test.js', () => {//Descripción de las pruebas que se deben hacer o qué archivo se va a testear

    test('Los strings deben ser iguales', () => { //Descripcion de la prueba de una parte del archivo

        //1. Inicialización
        const unString = 'Hola Mundo';
        //2. Estímulo
        const otroString = 'Hola Mundo';
        //3. Observar el comportamiento
        expect(unString).toBe(otroString); //El expect().toBe() es igual que utilizar el ===
    
        
    
    });

});