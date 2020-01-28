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
  

  switchNameHandler = (newName) => {
    this.setState({person:[
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephany', age: 26}]
      })
  }

  nameChangeHandler = (event) => {
    const name = event.target.value;
    
    this.setState({person:[
        {name: 'Max', age: 28},
        {name: name, age: 29},
        {name: 'Stephany', age: 26}]
      })
  }

  render = () => 
    <div className="App">
      <h1>Hi I am a react app </h1>
      <button className='buttonStyle' onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
      <Person 
        name={this.state.person[0].name} 
        age={this.state.person[0].age}
        click={this.switchNameHandler.bind(this, '!Max')}/>
      <Person 
        name={this.state.person[1].name} 
        age={this.state.person[1].age}
        change={this.nameChangeHandler}>My Hobbies: Racing </Person>
      <Person 
        name={this.state.person[2].name} 
        age={this.state.person[2].age}/>
    </div>
}


