import React, {Component} from 'react';
import Form from './MyComponents/Form';
import Users from './MyComponents/Users';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';

class App extends Component{
  constructor(){
    super();
    console.log('constructor');
    this.state = {
      users: [],
    };
  }

  componentDidMount(){
    
  }

  componentDidUpdate(){
    console.log('did update')
  }
  
  SubmitData = (e) => {

    const data = new FormData(e.target);

    fetch('http://localhost/xf2-test/admin.php?permissions/user-groups/registered.2/', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: data,
      }).then(function(response) {
        console.log(response)
        return response.json();
      });

    e.preventDefault(); 
  }

  render() {
    return <div className="App">
      <Container>
         <h1 className="text-center">Registration System in React</h1>

        <Form sendData={this.SubmitData} />

        <Users />
      </Container>
      
    </div>
        
  }
}

export default App;
