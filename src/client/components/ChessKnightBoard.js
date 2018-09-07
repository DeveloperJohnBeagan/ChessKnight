import React from 'react';
import PropTypes from 'prop-types';
import * as helper from './ChessKnightHelper';



export class ChessKnightBoard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.squareSize = 80;
    this.bgcolor = "beige";
    this.startEnd = "start";
    this.start = {};
    this.end = {};
    this.bestPath = [];
    //
    this.clickCell = this.clickCell.bind(this);
    this.resetComponent = this.resetComponent.bind(this);

  } // constructor

  toggleColor() {
    this.bgcolor = this.bgcolor == "beige" ? "white" : "beige";
  }

  toggleStartEnd() {
    this.startEnd = this.startEnd == "start" ? "end" : "start";
  }

  makeBoard() {
    const board = [7, 6, 5, 4, 3, 2, 1, 0].map(i => {
      return this.makeRow(i);
    });

    return (
      <div>{board}</div>
    );
  }

  makeRow(i) {

    this.toggleColor();

    const row = [0, 1, 2, 3, 4, 5, 6, 7].map(k => {
      return this.makeCell(i, k);
    });
    return (
      <div key={i} className="d-flex flex-nowrap">{row}</div>
    );
  }

  makeCell(i, k) {
    this.toggleColor();
    const divText = helper.chessNotation(i,k);
    const dataid = k.toString() + i.toString();
    return (
      <div
        key={k}
        data-row={i}
        data-col={k}
        data-id={dataid}
        data-color={this.bgcolor}
        onClick={this.clickCell}
        className="text-center align-middle"
        style={{
          backgroundColor: this.bgcolor,
          height: this.squareSize,
          width: this.squareSize,
          cursor: "pointer"
        }}>{divText}</div>
    );
  }

  async clickCell(evt) {
    const row = parseInt(evt.target.dataset.row);
    const col = parseInt(evt.target.dataset.col);
    const dataid = evt.target.dataset.col + evt.target.dataset.row;
    //alert(dataid);

    const startEnd = this.startEnd;
    this.toggleStartEnd();
    if (startEnd == "start") {
      $( "div[data-id='" + dataid + "']").css("background-color","lightgreen");
      this.start = {x: col, y: row}
    }
    else {
      $( "div[data-id='" + dataid + "']").css("background-color","lightpink");
      this.end = {x: col, y: row}
      const knightPath = await this.props.clickCell(this.start, this.end);
      this.bestPath = knightPath;
      this.highlightBestPath();
    }
  }

  highlightBestPath() {
    this.bestPath.forEach( item => {
      let id = item.x.toString() + item.y.toString();
      let node = $( "div[data-id='" + id + "']");
      $(node).css("background-color", "black");
      $(node).css("color", "white");
    });
  }

  resetComponent() {
    let id = this.start.x.toString() + this.start.y.toString();
    let node = $( "div[data-id='" + id + "']");
    let startColor = $(node).attr("data-color");
    $(node).css("background-color", startColor);
    //
    id = this.end.x.toString() + this.end.y.toString();
    node = $( "div[data-id='" + id + "']");
    startColor = $(node).attr("data-color");
    $(node).css("background-color", startColor);
    //
    this.startEnd = "start";
    this.start = {};
    this.end = {};
    //
    this.bestPath.forEach( item => {
      id = item.x.toString() + item.y.toString();
      node = $( "div[data-id='" + id + "']");
      startColor = $(node).attr("data-color");
      $(node).css("background-color", startColor);
      $(node).css("color", "black");
    });
    //
    this.props.resetComponent();
  }


  render() {

    const jsxBoard = this.makeBoard();

    return (
      <div >

        {jsxBoard}

        <br />

        <button
          className="btn btn-danger"
          style={{fontSize: "1.2rem", width: "8rem"}}
          onClick = {this.resetComponent}
          >
          Reset
        </button>


      </div>
    );

  }
}

ChessKnightBoard.propTypes = {
  clickCell: PropTypes.func.isRequired,
  resetComponent: PropTypes.func.isRequired
}


export default ChessKnightBoard;

