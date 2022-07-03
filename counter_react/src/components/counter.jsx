import React from 'react';

class Counter extends React.Component {
  // state cannot be accessed and modified outside of the component. It's equivalent to local variables in a function.
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };

  styles = {
    fontSize: '20px',
    fontWeight: 'bold'
  }

  constructor() {
    super()
    this.handleEventIncrement = this.handleEventIncrement.bind(this)
  }

  handleEventIncrement(e) {
    // This line of code works in ordinary javascript but in React, we do not code like this to change the value of that property
    // this.state.count ++

    // To change/mutate the property you will need to use setState 
    this.setState( { count: this.state.count + 1} );
    console.log(e)
  }

  // handleEventIncrement = () => {
  //   console.log('Increment Clicked', this)
  // }

  handleIncrement = e => {
    console.log(e)
  }


  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags!</p>

    return <ul> { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) } </ul>

    // if (this.state.tags.length === 0) {
    //   return <p>There is no tags!</p>
    // } else {
    //   return <ul> { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) } </ul>
    // }

  }

  render() {

    // let classes = 'badge ';
    // classes += this.state.count === 0 ? 'yellow' : 'blue' ;

    // <span style={ { fontSize: '10px' } } className={ classes }>{this.formatCount()}</span>

    return (
      <div>
        <span style={ this.styles } className={ this.getBadgeClasses() }>{this.formatCount()}</span>
        <button onClick={ () => this.handleEventIncrement({id :1}) } className='btn green'>Increment</button>
        { this.renderTags() }
        { this.state.tags.length === 0 && 'Please create a new tag.'}
      </div>
    );
  }

  // helper method
  getBadgeClasses() {
    let classes = 'badge ';
    classes += this.state.count === 0 ? 'yellow' : 'blue' ;
    return classes;
  }

  formatCount() {
    const { count } = this.state
    return count === 0 ? "Zero" : count
  }
}

export default Counter



// What you have learned
// - JSX element
// - Rendering List with unique key
// - Conditional rendering in two ways
// - Handling events and pass in argument
// - Updating state
