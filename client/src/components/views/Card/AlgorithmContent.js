import React, { useEffect, useState } from 'react'
import { Button, Space, Col, Row} from 'antd';
import axios from 'axios'


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

    //generate list of algo lines
    const renderLines = algoList.map((algo,index)=>{
      
        return<Row gutter={4} key={algo._id}>
                <div style={{ margin:"5px" }}>
                <Space>
                    <Button type="primary">Confirm</Button>
                    <a href={algo.link}>{algo.title}</a>
                    <span>{algo.level}</span>
                </Space>
                </div>
            </Row>
    })


    //render page
    return (
        <div style={{width:"100%" }}>
            {renderLines}
        </div>
    )
}

export default AlgorithmContent