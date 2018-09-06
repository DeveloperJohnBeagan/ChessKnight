/*eslint-disable import/default */
import React from 'react';
import {shallow} from 'enzyme';
import ChessKnightBoard from './ChessKnightBoard';

let component = "ChessKnightBoard";
let fail = false;

describe(component, () => {
    let wrapper;

    beforeEach(()=>{
      wrapper = shallow(<ChessKnightBoard />);
    });

    test(`shallow mounted`, () => {
        let shallowMounted = wrapper ? true : false;
        expect(shallowMounted).toBe(true);
    });

});

