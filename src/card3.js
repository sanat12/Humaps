import { List, Card,Space,Row,Col } from 'antd';
import { paginationforview3} from './window.js';
import {data} from './data.js';

function details(event){
    console.log("details");
}
function live(event){
    console.log("live");
}

const listData = [];
let temp=[];
for (let i = 0; i < data.length; i++) {
    console.log(data[i])
    temp.push(
        <Row>

            <Col span={8}>
                <div class="card" align="right">
                    <div class="card-body">
                        <Row span={3}><h3 class="card-title" align="left">Industry</h3></Row>               
                        <Row span={3}><h3 class="card-title" align="left">Category</h3></Row>                 
                        <Row span={3}> <h3 class="card-title" align="left">Contact Details</h3></Row>
                        <Row span={3}><h3 class="card-title" align="left">CPCB Code</h3></Row>
                        <Row span={3}><h3 class="card-title" align="left">Ganga Basin Disposal</h3></Row>   
                        <Row span={3}><h3 class="card-title" align="left">Actions</h3></Row>
                        <Row span={3}>
                        <p class="card-text" align="left">                    
                            <Space size="middle" align="left">
                                <a ></a>
                                <a ></a>
                            </Space>    
                        </p>
                        </Row>            
                    </div>
               </div>
            </Col>

            <Col span={8}></Col>

            <Col span={8}>
                <div class="card" align="left">
                    <div class="card-body">

                        <Row span={3}><p class="card-text" align="left">{data[i].industries} </p></Row>
                        <Row span={3}><p class="card-text" align="left">{data[i].categories} </p></Row>                    
                        <Row span={3}><p class="card-text" align="left">{data[i].contact} </p></Row>
                        <Row span={3}><p class="card-text" align="left">{data[i].cpcb} </p></Row>
                        <Row span={3}><p class="card-text" align="left">{data[i].ganga} </p> </Row>   
                        <br/>  
                        <Row span={3}>
                        <p class="card-text" align="left">                    
                            <Space size="middle" align="left">
                                <a onClick={details}>Details</a>
                                <a onClick={live}>Live</a>
                            </Space>    
                        </p>   
                        </Row>         
                    </div>
                </div>
            </Col>
       
        </Row>

          );     
}       
listData.push(...temp)
function Card3(){
return(
 <List>
    <List
    itemLayout="horizontal"
    size="large"
    pagination={paginationforview3}
    dataSource={[...listData]}
    renderItem={item => (
      <List.Item>
        <Card>
             {item}
        </Card>
      </List.Item>
    )}
  />
</List>
  );

}

export default Card3;