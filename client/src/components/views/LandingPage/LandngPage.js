import React,{ useEffect, useState } from 'react'
import axios from 'axios';

function LandngPage() {

    const [title, setTitle] = useState(" ");

    //componentDidMount
    useEffect(() => {
        axios.get('/api/YearlyGoal/2021')
        .then(response => {
            console.log(response.data);
            // setTitle(response.data);
        })
    },[])

    //rendering
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            ,width: '100%', height: '100vh'
        }}>
            <h2>This is Landing Page {title} </h2>
        </div>
    )
}

export default LandngPage
