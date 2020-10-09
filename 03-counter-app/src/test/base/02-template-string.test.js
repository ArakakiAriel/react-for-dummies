import '@testing-library/jest-dom'; 
import {getSaludo} from '../../base/02-template-string'
describe('testeando 02-template-string', () => {
    test('probando getSaludo pasando argumento', () => {
        const nombre = 'Goku';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe(`Hola ${nombre}`);
    });
    test('probando getSaludo sin pasar argumento', () => {
        const saludo = getSaludo();
        expect(saludo).toBe(`Hola Carlos`);
    });
});