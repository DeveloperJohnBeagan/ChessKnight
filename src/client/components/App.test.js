/*eslint-disable import/default */
import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

let component = "App";
let fail = false;

describe(component, () => {
    let wrapper;

    beforeEach(()=>{
      wrapper = shallow(<App />);
    });

    test(`shallow mounted`, () => {
        let shallowMounted = wrapper ? true : false;
        expect(shallowMounted).toBe(true);
    });

    test(`test stub to force failure`, () => {
      expect(true).toBe(true);
    });

    test(`with no expect`, () => {
    });

});

