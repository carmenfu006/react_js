import React from 'react';

class CounterTwo extends React.Component {

  styles = {
    fontSize: '20px',
    fontWeight: 'bold'
  }

  componentDidUpdate(prevProps) {
    // console.log('prevProps', prevProps)
    console.log(prevProps.value !== this.props.value)
    // if (prevProps.value !== this.props.value) {
    // Ajax call and get new data from the server
    // }
  }

  render() {
    console.log('Counter - Rendered')
    return (
      <div>
        {this.props.children}
        <span style={ this.styles } className={ this.getBadgeClasses() }>{this.formatCount()}</span>
        <button onClick={ this.props.onIncrement } className='btn green'>Increment</button>
        <button className='btn red' onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }

  // helper method
  getBadgeClasses() {
    let classes = 'badge ';
    classes += this.props.value === 0 ? 'yellow' : 'blue' ;
    return classes;
  }

  formatCount() {
    const { value } = this.props
    return value === 0 ? "Zero" : value
  }
}

export default CounterTwo