import React from 'react';
import Person from './Person/Person';



const persons = (props) => props.persons.map(person => {
        return <Person 
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    delete={() => props.delete(person.id)}
                    change={(event)=> props.change(person.id,event)}/>})
export default persons;