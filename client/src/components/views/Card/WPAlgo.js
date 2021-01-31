// WP stands for Weekly Progress

import React from 'react'
import axios from 'axios';

import { Progress, Typography, Space } from 'antd';

import ExerciseCard from "./ExerciseCard"


const { Title } = Typography;


function WPAlgo() {

    //axios get wk progress and calculate

    return (
            <ExerciseCard children={
                    <div style={{ margin: "5px" }}>
                        <Progress type="circle" percent={75} />
                        <p>7/10</p>
                    </div>

           }/>
    )
}

export default WPAlgo
