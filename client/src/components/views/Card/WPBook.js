// WP stands for Weekly Progress

import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Typography, Space } from 'antd';
import { Line } from '@ant-design/charts';

import ExerciseCard from "./ExerciseCard"


const { Title } = Typography;


function WPBook() {

  const [ readPageList, setReadPageList ] = useState([]);

  useEffect(()=>{
    axios({
      method: 'get',
      url: '/api/books/GetBookById',
      data:{
        id: "60219f2a03fdf00d5cf4051d"
      }
    })
    .then( response => {
      // setReadPageList(response.data.dailyPage)
      // console.log(readPageList);
    })
  },[])

     const data = [
    { year: '1991', value1: 3 },
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

    return (
            <ExerciseCard children={
                    <div style={{ margin: "5px" }}>
                        <p><Line {...config} /></p>
                    </div>

           } title = {
               <div>
                    Book Weekly Progress
               </div>
           }/>

    )
}

export default WPBook