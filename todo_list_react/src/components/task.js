import React from 'react';
import Button from './button';

class Task extends React.Component {
  render() {
		return (
			<div>
				{this.props.tasks.map((task, index) => (
          <p key={index} id={index + 1}>{task}</p>
        ))}
			</div>
		);
	};
}

export default Task