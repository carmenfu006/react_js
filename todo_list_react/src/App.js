import React from 'react';
import Input from './components/input';

class App extends React.Component {

  constructor() {
    super()
    this.handleCreate = this.handleCreate.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  state = {
    inputValue: '',
    tasks: []
  };

  render() {
    return (
      <React.Fragment>
        <h1>Insert To-do List</h1>
        <Input 
          value={this.state.inputValue}
          onInsert={event => this.insertInputValue(event)}
          onCreate={this.handleCreate}
          onClear={this.handleClear}
          onRemove={this.handleRemove}
          tasks={this.state.tasks} >
        </Input>
      </React.Fragment>
    );
  };

  insertInputValue(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleClear() {
    this.setState( { tasks: [] } )
  }

  handleCreate() {
    // or
    let tasks = [...this.state.tasks];
    tasks.push(this.state.inputValue)
    this.setState( { tasks: tasks } )

    // or
    // this.setState(prevState => ({ tasks: [...prevState.tasks, this.state.inputValue] }) );
    this.clearInputField()
  }

  handleRemove() {
    console.log('You are removing this element')
  }

  clearInputField() {
    const { inputValue } = this.state
    if ( inputValue !== '' ) return this.setState( { inputValue: ''} );
  }
}

export default App