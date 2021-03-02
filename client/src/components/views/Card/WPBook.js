// WP stands for Weekly Progress

import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Typography, Space,Row } from 'antd';
import { Line } from '@ant-design/charts';

import ExerciseCard from "./ExerciseCard"




function WPBook() {

  const [ readPageList, setReadPageList ] = useState([]);
  var bookId = "60219f2a03fdf00d5cf4051d" 

  useEffect(()=>{
    axios.get('/api/books/GetBookById/'+bookId)
    .then( response => {
      //console.log(typeof response.data.book.dailyPage)
      setReadPageList(response.data.book.dailyPage)
    })
  },[])

  const dataList = readPageList.map((pages,index) => {
    var obj = JSON.stringify({"year":index, "value":200})
    return JSON.parse(obj)
  })


     const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

    console.log("1\n"+ dataList[0].year);
    console.log("2\n"+data[0].year);

    return (
            <ExerciseCard children={
                    <div style={{ margin: "5px" }}>
                        <Line {...config} />
                    </div>

           } title = {
               <div>
                    <p>Book Weekly Progress</p>
               </div>
           }/>

    )
}

export default WPBook