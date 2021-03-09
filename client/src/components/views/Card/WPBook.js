// WP stands for Weekly Progress

import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Typography, Space,Row } from 'antd';
import { Line } from '@ant-design/charts';

import ExerciseCard from "./ExerciseCard"




function WPBook() {

  const [ pageList, setPageList ] = useState([]);
  const data = [{year: '2012',value: 10},{year:'2013',value: 11}]
  var bookId = "60219f2a03fdf00d5cf4051d" 

  useEffect(()=>{
    axios.get('/api/books/GetBookById/'+bookId)
    .then( response => {
      //console.log(typeof response.data.book.dailyPage)
      if(response.data.success){
        setPageList(response.data.book.dailyPage)

            }
    })

  },[])


  for(let i = 0; i < pageList.length; i++){
    data.push({year: ''+i, value: pageList[i].readPage})
  }
  console.log(data)



  //    const data = [
  //   { year: '1991', value: 3 },
  //   { year: '1992', value: 4 },
  //   { year: '1993', value: 3.5 },
  //   { year: '1994', value: 5 },
  //   { year: '1995', value: 4.9 },
  //   { year: '1996', value: 6 },
  //   { year: '1997', value: 7 },
  //   { year: '1998', value: 9 },
  //   { year: '1999', value: 13 },
  // ];

// console.log(data)

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