import React, { useEffect, useState } from 'react';
import Listview from './list.js';
import Tableview from './table.js'
import Card3 from './card3.js';
import Card2 from './card2.js';

export const tableprops=
    {
        size:'default', 
        border:'1px solid black',
        padding: "8px", 
    };
    
export const paginationfortable={
     showQuickJumper:true,
     onChange: page => {
        console.log(page);
      },
     showSizeChanger: true, 
     pageSizeOptions: ['1', '20', '30'],
     defaultPageSize:20,
     size:'default',
     position:['topRight'],
    };
export const paginationforview2={
    showSizeChanger: true,
    pageSizeOptions: ["1", "14", "21", "28"],
    defaultPageSize:10,
    position: "top",
    align:'center',
    size:"large",
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
export const paginationforsort={
    showSizeChanger: true,
    pageSizeOptions: ["1","5", "10", "50"],
    defaultPageSize:2,
    position: "top",
    size:'small',
    showQuickJumper:true,
    onChange: page => {
    console.log(page);
  },
  };

export const sortbyoptions=["Stack","Parameter","others1"];

export const styleforheader={
    color:'blue',
}
export const styleforindustry={
    color:'orange',
}
export const styleforcategory={
    color:'black',
}
export const styleforcontact={
    color:'black',
}
export const styleforganga={
    color:'black',
}
export const styleforcpcb={
    color:'black',
}


const breakpoints=[1000,768,576]
export default class Window extends React.Component
{
    
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
    }

    update = () => {
        this.setState({width:window.innerWidth});
      };

      componentDidMount() {
        window.addEventListener("resize", this.update);
      };
    
      componentDidUpdate() {
        window.addEventListener("resize", this.update);
      };

 render(){   
    if(this.state.width>breakpoints[1] && this.state.width<breakpoints[0]){
        return(
            <Card3/>
        );
    }
    else if(this.state.width>breakpoints[0] ){
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
}