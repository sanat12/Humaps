import React, { useEffect, useState } from 'react';
import Listview from './list.js';
import Tableview from './table.js'
import Card3 from './card3.js';
import Card2 from './card2.js';

export const tableprops=
    {
        'size':'default', 
        'bordered':true,    
    };
export const paginationfortable={
     showQuickJumper:true,
     onChange: page => {
        console.log(page);
      },
     showSizeChanger: true, 
     pageSizeOptions: ['1', '20', '30'],
     defaultPageSize:1,
     size:'default',
     position:['topRight'],
    };
export const paginationforview2={
    showSizeChanger: true,
    pageSizeOptions: ["1", "14", "21", "28"],
    defaultPageSize:10,
    position: "top",
    showQuickJumper:true,
          onChange: page => {
    console.log(page);
  },
  };
export const paginationforview3={
    showSizeChanger: true,
    pageSizeOptions: ["10", "20", "50"],
    defaultPageSize:1,
    position: "top",
    showQuickJumper:true,
    onChange: page => {
    console.log(page);
  },
  };
const breakpoints=[1000,768,576]
function Window()
{
    
    let [width,setWidth]=useState(1200);

    let update = () => {
        setWidth(window.innerWidth);
      };

    useEffect(()=>{
        update();
    },[width]);

    window.addEventListener("resize", update);
    if(width>breakpoints[1] && width<breakpoints[0]){
        return(
            <Card3/>
        );
    }
    else if(width>breakpoints[0] ){
        return(
            <Tableview/>
        );
    }
    else {
        return(
            <Card2/>
        );
    }
}
export default Window;