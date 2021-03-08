// WP stands for Weekly Progress

import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Typography, Space,Row } from 'antd';
import { Line } from '@ant-design/charts';

import ExerciseCard from "./ExerciseCard"




function WPBook() {

  const [ pageList, setPageList ] = useState([]);
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

    // const dataList = pageList.map((pages,index) => {
    // //   var obj = {year:"index", value:200}
    // //   // console.log(typeof JSON.parse(obj.year))
    // //   console.log("wow"+obj)
    // //   return JSON.parse(obj)

    //   return <Space key = {index}>
    //         <span>
    //           {index} |
    //           {pages.readPageList} \
    //         </span>

    //         </Space>
    // })

    const dataList = pageList.map((page,index)=>{
      // var obj = {year:"index", value:200}
      // // console.log(typeof JSON.parse(obj.year))
      // console.log("wow"+obj)
      // return JSON.parse(obj)



        return<Row gutter={4} key={page._id}>
                <div style={{ margin:"5px" }}>
                <Space>
                    <span>{page.readPage}</span>
                </Space>
                </div>
            </Row>
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

    // console.log("2\n"+(typeof data[0].value));

    return (
            <ExerciseCard children={
                    <div style={{ margin: "5px" }}>
                        <Line {...config} />
                        a{dataList}a
                    </div>

           } title = {
               <div>
                    <p>Book Weekly Progress</p>
               </div>
           }/>

    )
}

export default WPBook