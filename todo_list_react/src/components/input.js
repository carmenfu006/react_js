import React from 'react';
import Button from './button';
import Task from './task';

class Input extends React.Component {
  render() {
    return(
      <div>
        <input type='text' name='to_do' value={this.props.value} onChange={event => this.props.onInsert(event)} />
        <Button click={this.props.onCreate} value='Add' />
        <Button click={this.props.onClear} value='Clear All' />
        <Task tasks={this.props.tasks} remove={this.props.onRemove}></Task>
      </div>
    );
  };
}

export default Input