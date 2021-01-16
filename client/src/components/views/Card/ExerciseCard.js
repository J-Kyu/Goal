import { Typography } from 'antd'
import React from 'react'
import AlgorithmContent from './AlgorithmContent';


const { Title } = Typography;

//set title as state, and get title from parent....


function ExerciseCard() {
    return (
        <div style={{ maxWidth: "300px", textAlign: 'center' ,marginBottom: '0rem', border: '3px solid black', borderRadius: "3rem", borderStyle: 'dotted' }}>
            <Title level={3}>Titlle </Title>
            <div style={{ margin: "10px", maxWidth: '1000px', textAlign: 'center'}}>
               <AlgorithmContent/>
            </div>
        </div>
    )
}

export default ExerciseCard