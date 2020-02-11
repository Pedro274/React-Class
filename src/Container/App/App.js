import React, {Component} from 'react';
import Persons from '../../Component/Persons/Persons';
import Cockpit from '../../Component/Cockpit/cockpit'



export default class App extends Component {

  componentDidMount() {
    console.log('[App] component will mount')
  }

  static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps')
        return state
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpDate')
        return true 
    }

    getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log('[App.js] getSnapshotBeforeUpdate')
        return {message: 'snapshot'}
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[App.js] componentDidUpdate')
        console.log(snapshot)
    }


  
  state = {
      person:[
        {name: 'Max', age: 28, id: 'jfh2j'},
        {name: 'Manu', age: 29, id: 'jd75jtn'},
        {name: 'Stephany', age: 20, id: 'jnv64'}],
      someOtherState: 'some other state value',
      showPerson: false}
  

  nameChangeHandler = (id,event) => {
    const name = event.target.value;
    const copyStatePersonArray = [...this.state.person];
    const personNameToChangeIndex = copyStatePersonArray.findIndex(person => person.id === id);
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
            <div>
              <Cockpit 
              title= {this.props.title}
              toggle={this.toggleHandler}  
              showPerson={this.state.showPerson}
              persons={this.state.person}/>
              {person}
            </div>)
       
      
     
  }
}



