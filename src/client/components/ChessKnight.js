import React from 'react';
import axios from 'axios';
import ChessKnightBoard from './ChessKnightBoard';
import * as helper from './ChessKnightHelper';

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

  formatKnightPath() {
    let i = 0;
    let output = {};
    this.state.knightPath.forEach( o => {
      output[i] = helper.chessNotation(o.y, o.x);
      i++;
    });
   let jsxArray = [];
   for(let i in output) {
    const s = `"${i}":"${output[i]}"`;
    jsxArray.push(<div key={i}>{s}</div>);
    }
    return (
      <div>
        <div>{"{"}</div>
        <div>{jsxArray}</div>
        <div>{"}"}</div>
      </div>)
  }

  render() {

    return (
      <div >
        <h3>Click 2 squares -- start and end.</h3>
        <br />

        <ChessKnightBoard
          clickCell={this.clickCell}
          resetComponent={this.resetComponent}
        />

        <br />
        { this.state.knightPath.length == 0 ? null :
        <div>
            {this.formatKnightPath()}
        </div>
        }

      </div>
  );
  }
}

export default ChessKnight;
