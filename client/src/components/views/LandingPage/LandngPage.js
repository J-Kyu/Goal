import React,{ useEffect, useState } from 'react'
import axios from 'axios';

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
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            ,width: '100%', height: '100vh'
        }}>
            <label>
            <h1>{new Date().toLocaleTimeString()}</h1>
            <h2>{title} </h2>
            </label>
        </div>
    )
}

export default LandngPage
