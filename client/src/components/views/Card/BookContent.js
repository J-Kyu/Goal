import React, { useEffect, useState } from 'react';
import { Button, Space, Image } from 'antd';
import axios from 'axios'


import ExerciseCard from "./ExerciseCard"


function BookContent() {

    const [ bookNotionLink, setBookNotionLink ]  = useState();
    const [ bookThumbnailLink, setBookThumbnailLink ] = useState();
    const [ bookTitle, setBookTitle ] = useState();
    const [random, setRandom] = useState();

    useEffect(()=>{
        axios.get('/api/GetThisWeekBookInfo')
        .then( response => {
            if(response.data.success){

                console.log(response.data.book[0].title)

                setBookThumbnailLink(response.data.book[0].thumbnail)
                setBookNotionLink(response.data.book[0].notionLink)
                setBookTitle(response.data.book[0].title)

                console.log(bookNotionLink)
                console.log(bookThumbnailLink)
                console.log(bookTitle)
            }
        })

    },[])

    return (
        <div>
            <ExerciseCard children  = {
                <div style={{ width: "100%" }}>
                        <Image
                            preview={true}
                            src={bookThumbnailLink}
                            width={200}
                        />
                </div>
            } title = {
                <div>
                    <a href={bookNotionLink} target="_blank">{bookTitle}</a>
                </div>
            }/>
        </div>
    )
}

export default BookContent
