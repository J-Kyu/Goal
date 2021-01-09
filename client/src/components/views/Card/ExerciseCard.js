import { Typography } from 'antd'
import { ExceptionMap } from 'antd/lib/result';
import React from 'react'

const { Title } = Typography;

//set title as state, and get title from parent....


function ExerciseCard() {
    return (
        <div style={{ width: '100%', maxWidth: "300px", textAlign: 'center' ,marginBottom: '0rem', border: '3px solid black', borderRadius: "3rem", borderStyle: 'dotted' }}>
            <Title level={3}>Titlle </Title>
            <div style={{ display: 'inline-block', maxWidth: '100px', textAlign: 'center'}}>
                <ul>
                    <li> Sample 1</li>
                    <li> Sample 2</li>
                </ul>
            </div>
        </div>
    )
}

export default ExerciseCard