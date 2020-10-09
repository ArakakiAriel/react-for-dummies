import '@testing-library/jest-dom'; 
import {retornaArreglo} from '../../base/07-deses-arr'
describe('testeando 07-deses-arr', () => {
    test('retornaArreglo debe devolver un string y un numero', () => {
        const [letra,numero] = retornaArreglo();

        expect(typeof letra).toBe('string');
        expect(typeof numero).toBe('number');
    });

});