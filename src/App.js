import React, {Component} from 'react';
import MyButton from './MyComponents/MyButton';
import MyInput from './MyComponents/MyInput';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

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
    if(btnClicked === '+'){
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
         <h1>My First React App</h1>
        <h2>Counter</h2>

      <div className="main-content">
        
        <div className="countingFields">
          <MyButton text="-" buttonClick={this.handleClick} />
          <span>{this.state.counter}</span>
          <MyButton text="+" buttonClick={this.handleClick}  />
        </div>
        
        <MyInput iVal="0" inputChange={this.handleChange} />
      </div>
      
    </div>
        
  }
}

export default App;
