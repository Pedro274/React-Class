import React, {Component} from 'react';
import Person from './Person/Person';



export default class Persons extends Component {  
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
