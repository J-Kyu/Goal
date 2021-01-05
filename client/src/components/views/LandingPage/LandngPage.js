import React,{ useEffect } from 'react'
import axios from 'axios';

function LandngPage() {

    //componentDidMount
    useEffect(() => {
        document.h2 = "WOW";     
        axios.get('/api/YearlyGoal/2021')
        .then(response => console.log(response.data))
    },[])

    //rendering
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            ,width: '100%', height: '100vh'
        }}>
            <h2>This is Landing Page</h2>
        </div>
    )
}

export default LandngPage
