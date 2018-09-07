import React from 'react';
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
    return axios({
      method:'get',
      url:'/api/getKnightPath',
      params: {src, dest}
    })
    .then(res => {
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
