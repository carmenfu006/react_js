import React from 'react';
import CounterTwo from './counter_two';
// import Counter from './counter';

class Counters extends React.Component {

  // constructor() {
  //   super()
  //   this.handleDelete = this.handleDelete.bind(this)
  //   this.handleReset = this.handleReset.bind(this)
  // }

  render() {
    console.log('Counters - Rendered')
    return ( 
      <div>
        <button onClick={ this.props.onReset }>Reset</button>
        {this.props.counters.map(counter => (
          <CounterTwo
            onDelete={ () => this.props.onDelete(counter.id) }
            onIncrement={ () => this.props.onIncrement(counter) }
            key={counter.id}
            value={counter.value} >

            <h4>Counter {counter.id} this is a children props</h4>
          </CounterTwo>
        ))}
      </div> 
    );
  }
}

export default Counters;
