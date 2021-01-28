// WP stands for Weekly Progress

import React from 'react'
import axios from 'axios';

import { Progress } from 'antd';
import { Typography } from 'antd';

import ExerciseCard from "./ExerciseCard"


const { Title } = Typography;



function WPAlgo() {
    return (
            <ExerciseCard children={
                <div>
                        <Progress type="circle" percent={75} />
                </div>
            }/>
    )
}

export default WPAlgo
