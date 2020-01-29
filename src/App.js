import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

export default class App extends Component {
  
    state = {
      person:[
        {name: 'Max', age: 28, id: 'jfh2j'},
        {name: 'Manu', age: 29, id: 'jd75jtn'},
        {name: 'Stephany', age: 20, id: 'jnv64'}],
      someOtherState: 'some other state value',
      showPerson: false,
      }
  

  nameChangeHandler = (id,event) => {
    const name = event.target.value;
    const personNameToChangeIndex = this.state.person.findIndex(person => person.id === id);
    const copyStatePersonArray = [...this.state.person];
     copyStatePersonArray[personNameToChangeIndex].name = name;
    this.setState({copyStatePersonArray})
    
  }

  toggleHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }

  deletePersonHandler = (id) =>{
    // const person = this.state.person.slice() => this will make a copy of the array
    const person = [...this.state.person];
    const index = person.findIndex(person => person.id === id);
    person.splice(index,1);
    this.setState({person})
  }

  render = () => {

    let person = null;

    if(this.state.showPerson){
      person = (
        <div>
          {this.state.person.map((person) => {
            return <Person 
                name={person.name} 
                age={person.age}
                click={this.deletePersonHandler.bind(this,person.id)}
                key={person.id}
                change={this.nameChangeHandler.bind(this,person.id)}/>})
                }
       </div>)
    }

    
   return ( <div className="App">
      <h1>Hi I am a react app </h1>
      <button className='buttonStyle' onClick={this.toggleHandler}>Switch Name</button>
      {person}
    </div>)}
}


