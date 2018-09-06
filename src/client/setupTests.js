// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

/*
    to make prop-type errors fail, instead of just logging a warning
    see package.json, jest section, setupFile = jest-prop-type-error
*/
