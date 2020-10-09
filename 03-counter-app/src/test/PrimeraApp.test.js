import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme"; //Importamos shallow
import React from "react";
describe("PrimeraApp", () => {
  test("debe mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Hola, soy Kenji";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot(); //u
  });
  test("debe mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola, soy Kenji";
    const subtitulo = "Proyecto básico de React.";
    const wrapper = shallow(
        <PrimeraApp 
            saludo={saludo}
            subtitulo={subtitulo}
        />
    );
    
    const textoParrafo = wrapper.find('p').text(); //con el find podemos buscar por elemento, nos va a devolver un array de elementos en caso de encontrarse con más de uno
    expect(textoParrafo).toBe(subtitulo);


    expect(wrapper).toMatchSnapshot(); //
  });
});
