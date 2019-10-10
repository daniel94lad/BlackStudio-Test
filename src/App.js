import React,{Component} from 'react';
import './App.css';
import CardComponent from './components/Card';

import {
  Container,
} from 'reactstrap'

class App extends Component{
  
  render(){
    return (
      <div>
         <Container style={{width:"50%"}}>
           <CardComponent/>
         </Container>
      </div>
      
    );
  }
}

export default App;
