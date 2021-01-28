import React, { useEffect, useState } from 'react';
import { Button, Space, Col, Row} from 'antd';
import axios from 'axios'

import ExerciseCard from "./ExerciseCard"

function AlgorithmContent() {

    const [algoList, setAlgoList] = useState([]);

    //use router to load data from Mongo DB
    useEffect(() => {
        axios.get('/api/GetNotDoneAlgoList')
        .then(response => {
            if(response.data.success){
                console.log(response.data);
                setAlgoList(response.data.algoList)
            }
            else{
                alert("Failed loading Algo List")
                // console.log(response.data)
            }

        })        
    }, [])

    //button function
    function ActionButton(id,e){
            e.preventDefault();
            console.log(id)

            //chang isDone to Done
            axios({
                method: 'put',
                url: '/api/confirmAlgoProb/',
                data:{
                    id: id
                }
            })
            //add today's date
            //weekly goal update 
    }


    //generate list of algo lines
    const renderLines = algoList.map((algo,index)=>{
      
        return<Row gutter={4} key={algo._id}>
                <div style={{ margin:"5px" }}>
                <Space>
                    <Button type="primary" onClick={(e)=>ActionButton(algo._id,e)}>Confirm</Button>
                    <a href={algo.link}>{algo.title}</a>
                    <span>{algo.level}</span>
                </Space>
                </div>
            </Row>
    })


    //render page
    return (
        <ExerciseCard children = {
            <div style={{width:"100%" }}>
                    {renderLines}
            </div>
        }/>
   )
}

export default AlgorithmContent