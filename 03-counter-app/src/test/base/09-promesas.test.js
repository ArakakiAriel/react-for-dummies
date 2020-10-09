import '@testing-library/jest-dom'; 
import heroes from '../../data/heroes';
import {getHeroeByIdAsync} from '../../base/09-promesas'
describe('Pruebas 09-promesas', () => {
    test('prueba con async y encontrarlo', async () => {
        const id = 1;
        const hero = await getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
            });
        console.log(hero);
        
    });

    test('prueba con async y devolver error correspondiente', (done ) => {
        const id = 100;
        const hero = getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
        console.log(hero);
    });
});