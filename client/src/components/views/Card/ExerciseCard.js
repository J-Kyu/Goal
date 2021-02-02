import { Typography } from 'antd'
import React from 'react'
import AlgorithmContent from './AlgorithmContent';
import WPAlgo from "./WPAlgo"

const { Title } = Typography;

//set title as state, and get title from parent....


function ExerciseCard(props) {
    return (
        <div style={{ maxWidth: "300px", textAlign: 'center' ,marginBottom: '1rem', border: '3px solid black', borderRadius: "3rem", borderStyle: 'dotted' }}>
            <Title level={3} style={{ margin: '15px' }}>{props.title} </Title>
            <div style={{ margin: "10px", maxWidth: '1000px', textAlign: 'center'}}>
               {props.children} 
            </div>
        </div>
    )
}

export default ExerciseCard