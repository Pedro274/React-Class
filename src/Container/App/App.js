import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../../Component/Persons/Persons';




class App extends Component {
  
  state = {
      person:[
        {name: 'Max', age: 28, id: 'jfh2j'},
        {name: 'Manu', age: 29, id: 'jd75jtn'},
        {name: 'Stephany', age: 20, id: 'jnv64'}],
      someOtherState: 'some other state value',
      showPerson: false}
  

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
    const person = [...this.state.person];
    const index = person.findIndex(person => person.id === id);
    person.splice(index,1);
    this.setState({person})
  }

  render = () => {
 
    const buttonClass = [classes.Button]
    if(this.state.showPerson){buttonClass.push(classes.Red)}
    
    const styleParagraph=[];
    if(this.state.person.length <= 2){styleParagraph.push(classes.red)};
    if(this.state.person.length <= 1){styleParagraph.push(classes.bold)};

    let person = null;
    if(this.state.showPerson){
      person = (<div>
                  <Persons  
                    persons= {this.state.person} 
                    change= {this.nameChangeHandler}
                    delete= {this.deletePersonHandler}/>
               </div>)
    }

   return ( 
      <div className={classes.App}>
          <h1>Hi I am a react app </h1>
          <p className={styleParagraph.join(' ')}>Pedro </p>
          <button className={buttonClass.join(' ')} onClick={this.toggleHandler}>
              Switch Name
          </button>
          {person}
      </div>)
  }
}

export default App;

