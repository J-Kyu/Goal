import React,{ useEffect } from 'react'
import axios from 'axios';

function LandngPage() {

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    },[])

    return (
        <div>
            Landing page
        </div>
    )
}

export default LandngPage
