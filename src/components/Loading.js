import React, { Component } from 'react'
import spinner from './utils/tenor.gif';

export default class Loading extends Component {
  render() {
    return (
      <div>
        <img src={spinner} alt="Loading..." style={{width:"200px", height:"200px", margin:"auto", display:"block"}}/>
      </div>
    )
  }
}
