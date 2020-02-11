import React, {useEffect} from 'react';
import classes from './cockpit.module.css';


const Cockpit = (props) => {

    
    useEffect(() => {
        console.log('{[cockpit]} use effect')
        setTimeout(() => {
            alert('Saved data to cloud')
        }, 1000) 
    }); 
    // this will run with componentDidMount and componentDidUpdate
    // if you only want to use componentDidMount add an empty array as a second argument to use effect 
    // if you want to run only when the component mount and when the prop for user state run pass props.person (aka the state)
    useEffect(() => {
        console.log('{[cockpit]} 2-use effect')
    })

    const buttonClass = [classes.Button]
    if(props.showPerson){buttonClass.push(classes.Red)}
    
    const styleParagraph=[];
    if(props.persons.length <= 2){styleParagraph.push(classes.red)};
    if(props.persons.length <= 1){styleParagraph.push(classes.bold)};

    return (
        <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={styleParagraph.join(' ')}>Pedro </p>
          <button className={buttonClass.join(' ')} onClick={props.toggle}>
              Switch Name
          </button>
      </div>)
}

export default React.memo(Cockpit);