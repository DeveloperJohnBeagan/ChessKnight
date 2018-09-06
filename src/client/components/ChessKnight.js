import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export class ChessKnight extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      bestPath: []
    }

  } // constructor


  componentDidMount() {
    axios({
      method:'get',
      url:'/api/getKnightPath'
    })
    .then(res => {
      this.setState({bestPath: res.data});
    });
  }


  render() {

    let jsxArray = [];
    let displayValue = "";
    let i = 0;
    jsxArray = this.state.bestPath.map( o => {
      displayValue = JSON.stringify(o);
      i++;
      return <div key={i}>{displayValue}</div>;
    });

    return (
      <div >

        {jsxArray}

      </div>
  );
  }
}

export default ChessKnight;
