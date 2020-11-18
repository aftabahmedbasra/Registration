import React, {Component} from 'react';
import MyButton from './MyComponents/MyButton';
import MyInput from './MyComponents/MyInput';
import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state = {
      counter:0,
      subOrAddValue: 1
    };
  }

  handleClick = (e) => {
    let btnClicked = e.target.innerText;
    if(btnClicked == '+'){
      this.setState({
        counter: parseInt(this.state.counter) + parseInt(this.state.subOrAddValue)
      });
    }else{
      this.setState({
        counter: parseInt(this.state.counter) - parseInt(this.state.subOrAddValue)
      });
    }
  }

  handleChange = (e) => {

    if(Number(e.target.value)){
      this.setState({
        subOrAddValue : parseInt(e.target.value)
      });
    }

    
  }

  render() {
    return <div className="App">
      <div className="countingFields">
        <MyButton text="-" buttonClick={this.handleClick} />
        {this.state.counter}
        <MyButton text="+" buttonClick={this.handleClick}  />
      </div>
      
      <MyInput iVal="0" inputChange={this.handleChange} />
    </div>
        
  }
}

export default App;
