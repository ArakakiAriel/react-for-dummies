//import '@testing-library/jest-dom/extend-expect'; //Este es el que viene por defecto con create-react-app (No lo vamos a usar)
import "@testing-library/jest-dom"; //Para utilizar funciones como toMatchSnapshot
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'})); 