import React from 'react';
import PropTypes from 'prop-types';
import ChessKnight from './ChessKnight';

export class App extends React.Component {
  constructor(props, context) {
    super(props, context);

  } // constructor



  render() {

    return (
      <div className="container">

        <div className="jumbotron">
            <h1>Chess Knight - Shortest Path</h1>
        </div>

        <ChessKnight />

      </div>
  );
  }
}

export default App;
