import React, {useEffect} from 'react';
import classes from './cockpit.module.css';


const Cockpit = (props) => {
    
    useEffect(() => {
        console.log('{[cockpit]} use effect' )
    })

    const buttonClass = [classes.Button]
    if(props.showPerson){buttonClass.push(classes.Red)}
    
    const styleParagraph=[];
    if(props.person.length <= 2){styleParagraph.push(classes.red)};
    if(props.person.length <= 1){styleParagraph.push(classes.bold)};

    return (
        <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={styleParagraph.join(' ')}>Pedro </p>
          <button className={buttonClass.join(' ')} onClick={props.toggle}>
              Switch Name
          </button>
      </div>)
}

export default Cockpit;