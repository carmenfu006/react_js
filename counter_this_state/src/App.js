import React from 'react';
import Button from './components/Button';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      number: 0
    }
  }

  render() {

    const increaseNum = () => {
      this.setState( { number: this.state.number + 1 } )
    }

    const decreaseNum = () => {
      this.setState( { number: this.state.number - 1 } )
    }

    const colorChange = this.state.number >= 0 ? 'blue' : 'red';

    return (
      <React.Fragment>
        <h1>Counter React App</h1>
        <Button value='decrease' handleClick={decreaseNum}/>
        <p className={colorChange}>{this.state.number}</p>
        <Button value='increase' handleClick={increaseNum}/>
      </React.Fragment>
    )
  };
}

export default App;