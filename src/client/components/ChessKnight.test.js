/*eslint-disable import/default */
import React from 'react';
import {shallow} from 'enzyme';
import ChessKnight from './ChessKnight';

let component = "ChessKnight";
let fail = false;

describe(component, () => {
    let wrapper;

    beforeEach(()=>{
      wrapper = shallow(<ChessKnight />);
    });

    test(`shallow mounted`, () => {
        let shallowMounted = wrapper ? true : false;
        expect(shallowMounted).toBe(true);
    });

});

