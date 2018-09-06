import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ChessKnightBoard from './ChessKnightBoard';

export class ChessKnight extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      knightPath: []
    }
    this.clickCell = this.clickCell.bind(this);
  } // constructor


  getKnightPath() {
    axios({
      method:'get',
      url:'/api/getKnightPath'
    })
    .then(res => {
      this.setState({knightPath: res.data});
    });
  }

  clickCell() {

  }


  render() {
    let jsxArray = [];
    let displayValue = "";
    let i = 0;
    jsxArray = this.state.knightPath.map( o => {
      displayValue = JSON.stringify(o);
      i++;
      return <div key={i}>{displayValue}</div>;
    });

    return (
      <div >
        <h3>Click 2 squares... start and end.</h3>
        <br />

        <ChessKnightBoard />

        <br />

        <button className="btn btn-danger" style={{fontSize: "1.2rem", width: "8rem"}}>Reset</button>

        <br /><br />
        <div>
            {jsxArray}
        </div>


      </div>
  );
  }
}

export default ChessKnight;
