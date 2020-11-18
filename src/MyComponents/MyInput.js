import React from 'react';

class MyInput extends React.Component{
  
  render() {
      return <div className="inputField">
          <input type="number" onChange={this.props.inputChange} placeholder="Enter the number you want to increment or decrement" />
      </div>
  }
}
  
export default MyInput;
