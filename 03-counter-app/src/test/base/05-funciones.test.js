import '@testing-library/jest-dom'; 
import {getUser, getUsuarioActivo} from '../../base/05-funciones'
describe('testeando 05-funciones', () => {
    test('probando getUser()', () => {
        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const userTest = getUser(user);
        expect(userTest).toEqual(user);
    });
    
    test('probando getUsuarioActivo()', () => {
        const name = 'Kenjiman';
        
        const userTest = getUsuarioActivo(name);
        expect(userTest).toEqual({
            uid: 'ABC567',
            username: name
        });
    });

});