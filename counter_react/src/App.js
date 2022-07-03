import React from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters'; // counters already had the counter component in sync


class App extends React.Component {

  constructor() {
    super()
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleReset = this.handleReset.bind(this)
    console.log('App - Constructor');
  }

  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  componentDidMount() {
    console.log('App - Mounted');
  }

  handleIncrement(counter) {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index].value++;

    this.setState({ counters : counters })
  }

  handleReset() {
    const counters = this.state.counters.map(counter => {
                        counter.value = 0;
                        return counter
                      })
    this.setState({ counters : counters })
  };

  handleDelete(elementId) {
    const counters = this.state.counters.filter(elem => elem.id !== elementId)
    this.setState({ counters: counters })
  };

  render() {
    console.log('App - Rendered');
    return (
      <React.Fragment>
        <Navbar totalCounter={this.state.counters.filter(counter => counter.value > 0).length}/>
        <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete}/>
      </React.Fragment>
    );
  };
}


export default App;
