import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

export default class App extends Component {
  
    state = {
      person:[
        {name: 'Max', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephany', age: 20}],
      someOtherState: 'some other state value',
      showPerson: false,
      }
  

  nameChangeHandler = (event) => {
    const name = event.target.value;
    
    this.setState({person:[
        {name: 'Max', age: 28},
        {name: name, age: 29},
        {name: 'Stephany', age: 26}]
      })
  }

  toggleHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }

  deletePersonHandler = (index) =>{
    const person = this.state.person;
    person.splice(index,1);
    this.setState({person})
  }

  render = () => {

    let person = null;
    if(this.state.showPerson){
      person = (
        <div>
          {this.state.person.map((person,index) => {
            return <Person 
                name={person.name} 
                age={person.age}
                click={this.deletePersonHandler.bind(this,index)}/> })}
       </div>)
    }

    
   return ( <div className="App">
      <h1>Hi I am a react app </h1>
      <button className='buttonStyle' onClick={this.toggleHandler}>Switch Name</button>
      {person}
    </div>)}
}


