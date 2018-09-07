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
    this.resetComponent = this.resetComponent.bind(this);
  } // constructor


  getKnightPath(src, dest) {

//debugger;

    return axios({
      method:'get',
      url:'/api/getKnightPath',
      params: {src, dest}
    })
    .then(res => {
      //if (res.data.length > 0 && res.data[0].x == src.x && res.data[0].y == src.y) {
      //  res.data.shift();
      //}

      //debugger;

      this.setState({knightPath: res.data});
    });
  }

  async clickCell(src, dest) {
    await this.getKnightPath(src, dest);
    return this.state.knightPath;
  }

  resetComponent() {
    this.setState({knightPath: []});
  }


  render() {
    let jsxArray = [];
    let displayValue = "";
    let i = 0;
    jsxArray = this.state.knightPath.map( o => {
      displayValue = JSON.stringify(o);
      i++;
      //return i == 0 ? <div></div> : <div key={i}>{displayValue}</div>;
      return <div key={i}>{displayValue}</div>;
    });

    return (
      <div >
        <h3>Click 2 squares -- start and end.</h3>
        <br />

        <ChessKnightBoard
          clickCell={this.clickCell}
          resetComponent={this.resetComponent}
        />

        <br />
        <div>
            {jsxArray}
        </div>


      </div>
  );
  }
}

export default ChessKnight;
