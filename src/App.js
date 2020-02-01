import React, {Component} from 'react';
import classes from './App.module.css';
import Person from './Person/Person';




class App extends Component {
  
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
 
    const buttonClass = [classes.Button]

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

      buttonClass.push(classes.Red)

    }// end of render method

    const styleParagraph=[];
    if(this.state.person.length <= 2){styleParagraph.push(classes.red)};
    if(this.state.person.length <= 1){styleParagraph.push(classes.bold)};



   return ( 
   <div className={classes.App}>
      <h1>Hi I am a react app </h1>
      <p className={styleParagraph.join(' ')}>Pedro </p>
      <button className={buttonClass.join(' ')} onClick={this.toggleHandler} alt={this.state.showPerson}>
          Switch Name
      </button>
      {person}
    </div>)
    
  }
}

export default App;

