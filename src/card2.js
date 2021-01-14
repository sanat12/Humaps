import { List, Card,Space } from 'antd';
import {paginationforview2} from './window.js';
import {data} from './data.js';
import {useState} from 'react';

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
        <div class="row" align="center">
            <div class="card" align="center">
                <div class="card-body">
                    <h3 class="card-title" align="left">Industry</h3>
                    <p class="card-text" align="left">{data[i].industries} </p>
                    <h3 class="card-title" align="left">Category</h3>
                    <p class="card-text" align="left">{data[i].categories} </p>                    
                    <h3 class="card-title" align="left">Contact Details</h3>
                    <p class="card-text" align="left">{data[i].contact} </p>
                    <h3 class="card-title" align="left">CPCB Code</h3>
                    <p class="card-text" align="left">{data[i].cpcb} </p>
                    <h3 class="card-title" align="left">Ganga Basin Disposal</h3>
                    <p class="card-text" align="left">{data[i].ganga} </p>      
                    <h3 class="card-title" align="left">Actions</h3>
                    <p class="card-text" align="left">                    
                        <Space size="middle" align="left">
                            <a onClick={details}>Details</a>
                            <a onClick={live}>Live</a>
                        </Space>    
                    </p>            
                </div>
            </div>
        </div>

          );     
  listData.push(...temp)
}

function Card2(){

  return(
<div>
 <List>
    <List
    itemLayout="horizontal"
    size="large"
    pagination={paginationforview2}
    dataSource={[...listData]}
    renderItem={item => (
      <List.Item>
        <Card >
          {item}
        </Card>
      </List.Item>
    )}
  />
</List>
</div>
  );

}

export default Card2;