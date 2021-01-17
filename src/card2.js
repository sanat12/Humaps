import { List, Card,Space } from 'antd';
import {paginationforview2,styleforcategory,styleforheader,
  styleforindustry,styleforcontact,styleforcpcb,styleforganga} from './window.js';
import {data} from './data.js';
import {useState} from 'react';
import React from 'react';

function details(event){
  console.log("details");
}
function live(event){
    console.log("live");
}

const listData=[];

let temp=[];
for (let i = 0; i < data.length; i++) {
    console.log(data[0])
    temp.push(    
            <Card type="inner" align="center" bodyStyle={{align:'center',marginLeft:'30%'}}>
                    <h3  align="left" >Industry</h3>
                    <p  align="left" style={{color:'orange'}}>{data[i].industries} </p>
                    <h3  align="left" >Category</h3>
                    <p  align="left" >{data[i].categories} </p>                    
                    <h3  align="left" >Contact Details</h3>
                    <p  align="left">{data[i].contact} </p>
                    <h3  align="left">CPCB Code</h3>
                    <p  align="left" >{data[i].cpcb} </p>
                    <h3  align="left" >Ganga Basin Disposal</h3>
                    <p  align="left" >{data[i].ganga} </p>      
                    <h3  align="left">Actions</h3>
                    <p  align="left">                    
                        <Space size="middle" align="left">
                            <a onClick={details}>Details</a>
                            <a onClick={live}>Live</a>
                        </Space>    
                    </p>            
            </Card>

          );     
  listData.push(...temp)
}

class Card2 extends React.Component{
render(){
  return(
<div align="center">
 <List align="center">
    <List
    itemLayout="vertical"
    size="large"
    pagination={paginationforview2}
    dataSource={[...listData]}
    renderItem={item => (
      <List.Item>
        <Card type="inner" bordered={true} hoverable={true} bodyStyle={{align:'center'}}>
          {item}
        </Card>
      </List.Item>
    )}
  />
</List>
</div>
  );

}
}
export default Card2;