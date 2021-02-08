import React, { useEffect, useState } from 'react';
import { Button, Space, Image, InputNumber } from 'antd';
import axios from 'axios'


import ExerciseCard from "./ExerciseCard"


function BookContent() {

    const [ bookNotionLink, setBookNotionLink ]  = useState();
    const [ bookThumbnailLink, setBookThumbnailLink ] = useState();
    const [ bookTitle, setBookTitle ] = useState();
    const [ readPage, setReadPage ] = useState();
    const [ bookId, setBookId] = useState();

    useEffect(()=>{
        axios.get('/api/GetThisWeekBookInfo')
        .then( response => {
            if(response.data.success){

                setBookId(response.data.book[0]._id)
                setBookThumbnailLink(response.data.book[0].thumbnail)
                setBookNotionLink(response.data.book[0].notionLink)
                setBookTitle(response.data.book[0].title)
                console.log(response.data.book);
            }
        })

    },[])


    function ActionButton(id,page,e){
        e.preventDefault();
        console.log(id+"\t: "+page);

        axios({
            method: 'put',
            url: '/api/readBook',
            data:{
                bookId: id,
                readPage: page
            }
        })

    }


    return (
        <div>
            <ExerciseCard children  = {
                <div style={{ width: "100%" }}>
                    <Image
                        preview={true}
                        src={bookThumbnailLink}
                        width={200} 
                        style={{marginBottom:'10px'}}
                    />
                    <Space>
                        <InputNumber min={1} max={100} defualtValue={20} onChange={setReadPage} />
                        <Button type="primary" onClick={(e)=> ActionButton(bookId,readPage,e)}>Read</Button>
                    </Space>
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
