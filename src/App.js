import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

export default class App extends Component {
  
    state = {
      person:[
        {name: 'Max', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephany', age: 20}],
      someOtherState: 'some other state value'
      }
  

  switchNameHandler = () => {
    this.setState({person:[
        {name: 'Maximilian', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephany', age: 26}]
      })
  }

  render = () => 
    <div className="App">
      <h1>Hi I am a react app </h1>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
      <Person name={this.state.person[1].name} age={this.state.person[1].age}>My Hobbies: Racing </Person>
      <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
    </div>
}


