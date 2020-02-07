import React, {Component} from 'react';
import Person from './Person/Person';



export default class Persons extends Component { 
    
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Person.js] getDerivedStateFromProps')
    //     return state
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpDate')
        return true 
    }

    getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate')
        return {message: 'snapshot'}
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Person.js] componentDidUpdate')
        console.log(snapshot)
    }

        render = () => {
        return this.props.persons.map(person => {
        return <Person 
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    delete={() => this.props.delete(person.id)}
                    change={(event)=> this.props.change(person.id,event)}/>})
                }// end of render
}
