import React from 'react';
import PropTypes from 'prop-types';

export class ChessKnightBoard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.squareSize = 80;
    this.bgcolor = "beige";
    this.startEnd = "start";
    //
    this.clickCell = this.clickCell.bind(this);

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

  chessNotation(x, y) {
    let notation = "";
    switch (y) {
      case 0:
        notation = "a";
        break;
      case 1:
        notation = "b";
        break;
      case 2:
        notation = "c";
        break;
      case 3:
        notation = "d";
        break;
      case 4:
        notation = "e";
        break;
      case 5:
        notation = "f";
        break;
      case 6:
        notation = "g";
        break;
      case 7:
        notation = "h";
        break;
    }
    notation = notation + (x+1);
    return notation;
  }

  makeCell(i, k) {
    this.toggleColor();
    const divText = this.chessNotation(i,k);
    const dataid = i.toString() + k.toString();
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

  clickCell(evt) {
    const row = evt.target.dataset.row;
    const col = evt.target.dataset.col;
    const dataid = evt.target.dataset.row + evt.target.dataset.col;
    const startEnd = this.startEnd;
    this.toggleStartEnd();
    if (startEnd == "start") {
      $( "div[data-id='" + dataid + "']").css("background-color","lightgreen");
    }
    else {
      $( "div[data-id='" + dataid + "']").css("background-color","lightpink");
    }
  }

  render() {

    const jsxBoard = this.makeBoard();

    return (
      <div >

        {jsxBoard}

      </div>
    );

  }
}

export default ChessKnightBoard;

