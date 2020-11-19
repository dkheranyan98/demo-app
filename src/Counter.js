import React, { Component } from 'react';
//import './Counter.css'

class Counter extends Component {
    constructor () {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

   state={
       count: 0,
   }

    handleClick () {
      this.setState({
          count: this.state.count+1
      });
    }

    render() {
        return (
            <div>
                <p className='p-tag'>{this.state.count}</p>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default Counter;