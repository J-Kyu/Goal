import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import { Typography } from 'antd';

import WPAlgo from "./../Card/WPAlgo"
import AlgorithmContent from '../Card/AlgorithmContent';
import BookContent from '../Card/BookContent';
import WPBook from '../Card/WPBook';

const { Title } = Typography;



function LandngPage() {

    const [title, setTitle] = useState(" ");
    const [year, setYear] = useState(0);

    //componentDidMount
    useEffect(() => {
        axios.get('/api/YearlyGoal/2021')
        .then(response => {
            // console.log(response.data[0].title);
            setTitle(response.data[0].title);
            setYear(response.data[0].year);
        })
    },[])

    //rendering
    return (
        <div style={{ maxWidth: '1200px', margin: '2rem auto' , marginBottom: "2rem auto"}}>
            <div style={{ 
                textAlign: 'center' ,marginBottom: '0rem', border: '3px solid black',
                borderRadius: "3rem", borderStyle: 'dotted' , margin: '10px'
            }}>
                <Title level={2} >{title} </Title>
            </div>
            <AlgorithmContent/>
            <WPAlgo/>
            <BookContent/>
            <WPBook/>
        </div>
    )
}


export default LandngPage
