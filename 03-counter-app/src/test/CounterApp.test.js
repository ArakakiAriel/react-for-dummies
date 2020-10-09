import CounterApp from "../CounterApp";
import { shallow } from "enzyme"; //Importamos shallow
import React from "react";
describe("CounterApp", () => {
    let wrapper = shallow(<CounterApp />); //No es una buena practica duplicar el shallow pero si lo ponemos acá no perdemos el scope dentro de los tests y nos autocompleta las funciones que querramos utilizar sin necesidad de recordar todas
  beforeEach(() => {//Con el beforeEach podremos indicar que lo que esté dentro se llame siempre que empecemos a hacer un test.
    wrapper = shallow(<CounterApp />); //Lo creo en un nivel superior para que los test tengan acceso directamente sin necesidad de duplicar código

  });

  test("debe mostrar <CounterApp /> correctamente", () => {
    expect(wrapper).toMatchSnapshot(); //u
  });
  test("debe mostrar <CounterApp /> con el valor por defecto de 100", () => {
    // En este caso lo inicializo devuelta ya que le debo mandar un value
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const valorValue = wrapper.find("h2").text().trim(); //Convierto el contenido en texto, y le saco los espacios en blanco con el trim
    console.log(valorValue);
    expect(valorValue).toBe(`${value}`);
  });
  test("debe de incrementar el value con el boton +1", () => {
    const bIncrease = wrapper.find("button").at(0);
    bIncrease.simulate("click");

    const valorValue = wrapper.find("h2").text().trim();
    expect(valorValue).toBe(`1`);
  });
  test("debe de decrementar el value con el boton -1", () => {
    const bDecrease = wrapper.find("button").at(2);
    bDecrease.simulate("click");

    const valorValue = wrapper.find("h2").text().trim();
    expect(valorValue).toBe(`-1`);
  });
  test("debe de resetear el value al valor iniciado", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const bIncrease = wrapper.find("button").at(0);
    bIncrease.simulate("click");
    bIncrease.simulate("click");
    const bReset = wrapper.find("button").at(1);
    bReset.simulate("click");

    const valorValue = wrapper.find("h2").text().trim();
    expect(valorValue).toBe(`${value}`);
  });
});
