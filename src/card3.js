import { List, Card,Space,Row,Col } from 'antd';
import { paginationforview3} from './window.js';
import {data} from './data.js';
import 'antd/dist/antd.css';
import { AlignCenterOutlined } from '@ant-design/icons';

function details(event){
    console.log("details");
}
function live(event){
    console.log("live");
}
const gridStyle = {
    width: '50%',
    textAlign: 'left',
  };
const listData = [];
let temp=[];
for (let i = 0; i < data.length; i++) {
    //sconsole.log(data[i])
    let keys=Object.keys(data[i])
    let val=Object.values(data[i])
    let item=[];
    for(let i=1;i<keys.length;i++){
        if(i==1){
            item.push(
                <Row>
                    <Card.Grid style={gridStyle} hoverable={false}>
                        <h3 align="left" style={{color:'black',fontStyle:'strong'}}>{keys[i]}</h3>
                    </Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle} >
                        <h3 style={{color:'orange',fontStyle:'strong'}}>{val[i]}</h3>
                    </Card.Grid>
                 </Row>            
                );
        }
        else{
            item.push(
                <Row>
                    <Card.Grid style={gridStyle} hoverable={false}>
                        <h3 align="left" style={{color:'black',fontStyle:'strong'}}>{keys[i]}</h3>
                    </Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle} >
                        <h3 style={{color:'black',fontStyle:'strong'}}>{val[i]}</h3>
                    </Card.Grid>
                 </Row>            
                );
        }

    }
    temp.push(
        <Card hoverable={true} >
            {item}
       </Card>,
          );     
}       
listData.push(...temp)
function Card3(){
return(
 <div style={{display: 'flex',  justifyContent:'center',alignItems:'center'}}>
    <List
    itemLayout="horizontal"
    size="large"
    alignContent="middle"
    pagination={paginationforview3}
    dataSource={[...listData]}
    renderItem={item => (
      <List.Item align="middle">
             {item}
      </List.Item>
    )}
  />
</div>
  );

}

export default Card3;