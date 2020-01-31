import React from 'react';
import './Person.css';
import styled from 'styled-components';


const StyleDiv = styled.div`
        width: 450px ;
        margin:  auto;
        box-shadow: 0 0 12px black;
        padding: 16px;
        text-align: center;
        margin-top: 22px;

        @media (max-width: 500px) {
            width: 100%
        }
`;

const person = (props) => {

return (
    //<div className='Person'>
    <StyleDiv>
        <p onClick={props.click}>I'm {props.name} I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type='text' onChange={props.change} value={props.name}/>
    </StyleDiv>
)};

export default person;