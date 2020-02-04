import React, { Component } from 'react';
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

export default class Person extends Component {
render = () =>
    <StyleDiv>
        <p onClick={this.props.delete}>I'm {this.props.name} I am {this.props.age} years old</p>
        <input type='text' onChange={this.props.change} value={this.props.name}/>
    </StyleDiv>
};

