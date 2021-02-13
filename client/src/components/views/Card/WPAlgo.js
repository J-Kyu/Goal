// WP stands for Weekly Progress

import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Progress, Typography, Space } from 'antd';

import ExerciseCard from "./ExerciseCard"


const { Title } = Typography;


function WPAlgo() {

    const [curAlgoNum, setCurAlgoNum ] = useState();
    const [goalAlgoNum , setGoalAlgoNum ] = useState();

    //axios get wk progress and calculate
    useEffect(()=>{
        axios.get('/api/weeklyGoal/GetWeeklyAlgoProgressResult')
        .then(response => {
            if(response.data.success){
                setCurAlgoNum(response.data.wkGoal[0].algoProgress)
                setGoalAlgoNum(response.data.wkGoal[0].algoGoal)
            }
        })
    })

    var pt = curAlgoNum/goalAlgoNum;
    return (
            <ExerciseCard children={
                    <div style={{ margin: "5px" }}>
                        <Progress type="circle" percent={(curAlgoNum/goalAlgoNum)*100} />
                        <p>{curAlgoNum}/{goalAlgoNum}</p>
                    </div>

           } title = {
               <div>
                    Algo Weekly Progress
               </div>
           }/>
    )
}

export default WPAlgo
