import "antd/dist/antd.css";
import { List,Select,Button,Pagination ,Card,Modal} from 'antd';
import { CaretUpOutlined,CaretDownOutlined  } from '@ant-design/icons';
import {useState,useEffect} from 'react';
import { render } from "@testing-library/react";
import {sorteddata} from './data.js';
import {paginationforsort,sortbyoptions} from './window.js'
import React from "react";
const { Option } = Select;

const datas= [
  {
    key: '0',
    'Group':'A',
    'Industry': 'Industry 1',
    'children':[
    {
      key:'10',
    'Stack':'stack10',
    'Parameter': 'pam12',
    'RC':'yes',
    'others1':'23.45',
    'others2':'23.45',
    'others3':'23.45',
    'others4':'23.45',
    'children':[
    ],
    },
    {
    key:'111',
    'Stack':'stack11',
    'Parameter': 'pam10',
    'RC':'yes',
    'others1':'23.45',
    'others2':'23.45',
    'others3':'23.45',
    'others4':'23.45',
    'children':[],
    },
    {
      key:'12',
      'Stack':'stack00',
      'Parameter': 'pam11',
      'RC':'yes',
      'others1':'23.45',
      'others2':'23.45',
      'others3':'23.45',
      'others4':'23.45',
      'children':[],
      },
    ],
  },
    {
    key: '1',
    'Group':'B',
    'Industry': 'Industry 2',
    'Stack':'stack2',
    'Parameter': 'pam2',
    'RC':'yes',
    'others1':'23.45',
    'others2':'23.45',
    'others3':'23.45',
    'others4':'23.45',
    'children':[],
  },
    {
    key: '2',
    'Group':'C',
    'Industry': 'Industry 3',
    'Stack':'stack3',
    'Parameter': 'pam3',
    'RC':'yes',
    'others1':'23.45',
    'others2':'23.45',
    'others3':'23.45',
    'others4':'23.45',
    'children':[],
  },
    {
    key: '3',
    'Group':'D',
    'Industry': 'Industry 4',
    'Stack':'stack4',
    'Parameter': 'pam4',
    'RC':'yes',
    'others1':'23.45',
    'others2':'23.45',
    'others3':'23.45',
    'others4':'23.45',
    'children':[],
  },

  {
   key: '4',
    'Group':'E',
    'Industry': 'Industry 5',
    'children':[
    {
      key:'40',
    'Stack':'stack50',
    'children':[
    {
    key:'401',
    'Parameter': 'pam211',
    'RC':'yes',
    'others1':'23.45',
    'others2':'23.45',
    'others3':'23.45',
    'others4':'23.45',
    'children':[],
    },
    {
    key:'402',
    'Parameter': 'pam11111',
    'RC':'yes',
    'others1':'23.45',
    'others2':'23.45',
    'others3':'23.45',
    'others4':'23.45',
    'children':[],
    },
    ],
    },
    {
    key:'41',
    'Stack':'stack51',
    'children':[
      {
        'Parameter': 'pam51',
        'RC':'yes',
        'others1':'23.45',
        'others2':'23.45',
        'others3':'23.45',
        'others4':'23.45',
         'children':[],
      }
    ],
    },
    ],
  },

    ];

// console.log(data[0].children.length)
const children = [];

for (let i = 0; i < datas.length; i++) {
  children.push(<Option key={datas[i].key}>{datas[i].Industry}</Option>);
}






export default class Listview extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        array:[],
        index:'-1',
        key:0,
        order:1,
        isModalVisible:false,        
    };
    this.test=[];
}

 showModal = () => {
    this.setState({isModalVisible:true});
  };

   handleOk = () => {
    this.setState({isModalVisible:false});
  };

 handleCancel = (e) => {
    this.setState({isModalVisible:false});
  };  

  
display=(value,data)=>{
  // if(this.index=='-1'){
  //   console.log("sssssssss")
  //   return
  // })
  console.log(value)
  this.setState({index:value})
  console.log(this.index)
  this.loop();
  let flag=false;
  this.setState({array:[]});
  let temp=[];
  for(let i=0;i<data[value].children.length;i++){
    if(data[value].children[i].children.length>1){
      flag=true;
      break;
    }
  }

  if(data[value].children.length>0){
    temp.length=0;
    //multiple stack multiple parameter
    if(flag){
        temp.length=0;
        for(let i=0;i<data[value].children.length;i++){
          if(data[value].children[i].children.length>1)
          {
              for(let j=0;j<data[value].children[i].children.length;j++)
              {
              if(j==0){
              
                let childitems=[];
                let parentitems=[];
                let keys=Object.keys(data[value].children[i].children[j])
                let values=Object.values(data[value].children[i].children[j])
                let pkeys=Object.keys(data[value].children[i])
                let pvalues=Object.values(data[value].children[i])
                console.log(pvalues)
  
                for(let i=1;i<pkeys.length-1;i++)
                {
                  parentitems.push(
                    <span>
                      <h4 align="left">{pkeys[i]}</h4>
                      <p align="left">{pvalues[i]}</p>
                    </span>
                  )
                }                
        
                for(let i=1;i<keys.length-1;i++)
                {
                  childitems.push(
                    <span>
                      <h4 align="left">{keys[i]}</h4>
                      <p align="left">{values[i]}</p>
                    </span>
                  )
                }                
  
  
              temp.push(
                <Card type="outer" bordered={false}>
                  {parentitems}
                    <Card type="inner" bordered={false}>
                      {childitems}
                   </Card>
               </Card>
              );
              }
              else{
              let parentitems=[];
              let keys=Object.keys(data[value].children[i].children[j])
              let values=Object.values(data[value].children[i].children[j])
              for(let i=1;i<keys.length-1;i++)
              {
                parentitems.push(
                  <span>
                    <h4 align="left">{keys[i]}</h4>
                    <p align="left">{values[i]}</p>
                  </span>
                )
              }
  
              temp.push(  
                  <Card type="outer" bordered={false}>       
                      <Card type="inner" bordered={false}>
                        {parentitems}
                     </Card>
                 </Card>
                );
              }//for
  
          }//if
        }
          else{
  
            let childitems=[];
            let parentitems=[];
            let keys=Object.keys(data[value].children[i].children[0])
            let values=Object.values(data[value].children[i].children[0])
            let pkeys=Object.keys(data[value].children[i])
            let pvalues=Object.values(data[value].children[i])
            console.log(pvalues)
  
            for(let i=1;i<pkeys.length-1;i++)
            {
              parentitems.push(
                <span>
                  <h4 align="left">{pkeys[i]}</h4>
                  <p align="left">{pvalues[i]}</p>
                </span>
              )
            }                
    
            for(let i=0;i<keys.length-1;i++)
            {
              childitems.push(
                <span>
                  <h4 align="left">{keys[i]}</h4>
                  <p align="left">{values[i]}</p>
                </span>
              )
            }                
  
  
          temp.push(
            <Card type="outer" bordered={false}>
              {parentitems}
                <Card type="inner" bordered={false}>
                  {childitems}
               </Card>
           </Card>
          );
          }    
        }
        
    }//if
  
  //multiple stack single parameter
  else{
        temp.length=0;
        for(let i=0;i<data[value].children.length;i++){
             // console.log(data[value].children[i].Stack) 
  
             let parentitems=[];
             let keys=Object.keys(data[value].children[i])
             let values=Object.values(data[value].children[i])
             for(let i=2;i<keys.length-1;i++)
             {
               parentitems.push(
                 <span>
                   <h4 align="left">{keys[i]}</h4>
                   <p align="left">{values[i]}</p>
                 </span>
               )
             }
  
             temp.push(
                <Card type="outer" bordered={false}>
                  <h4 align="left">Stack</h4>
                  <p align="left">{data[value].children[i].Stack}</p>
                    <Card type="inner" bordered={false}>
                      {parentitems}
                   </Card>
              </Card>,
              );
                      
            }
  
  }//else
  
  }
  
  //single stack sinlge parameter
  else{
          temp.length=0;
          let parentitems=[];
          let keys=Object.keys(data[value])
          let values=Object.values(data[value])
          for(let i=2;i<keys.length-1;i++)
          {
            parentitems.push(
              <span>
                <h4 align="left">{keys[i]}</h4>
                <p align="left">{values[i]}</p>
              </span>
            )
          }
          temp.push(
          <Card type="outer" bordered={false}>
            <h4 align="left">{keys[1]}</h4>
            <p align="left">{values[1]}</p>
              <Card type="inner" bordered={false}>
                {parentitems}
              </Card>
          </Card>
          );                                                                                             
                   
  }
this.setState({array:[...temp]});
};


 display1=(event,arr1)=>{
  // if(this.index=='-1'){
   this.loop()
   this.setState({isModalVisible:false});
  let array=arr1;
    //Dynamic sorting
    while(1){
      if(array[0]!==undefined && array[0][sortbyoptions[this.state.key]]!==undefined){
        for(let i=0;i<array.length;i++)
        {
        if(this.state.order==1){
         array.sort((a,b) => 
          (a[sortbyoptions[this.state.key]] > b[sortbyoptions[this.state.key]]) ? 1 : ((b[sortbyoptions[this.state.key]] > a[sortbyoptions[this.state.key]]) ? -1 : 0));
        }
        else{
          array.sort((a,b) =>
          (a[sortbyoptions[this.state.key]] < b[sortbyoptions[this.state.key]]) ? 1 : ((b[sortbyoptions[this.state.key]] < a[sortbyoptions[this.state.key]]) ? -1 : 0));
        }
        }
        break;
      }
     else if(array[0]!==undefined && array[0].children!==undefined && array[0].children[0][sortbyoptions[this.state.key]]!==undefined){
        for(let i=0;i<array.length;i++)
        {
        if(this.state.order==1){
         array[i].children.sort((a,b) => 
          (a[sortbyoptions[this.state.key]] > b[sortbyoptions[this.state.key]]) ? 1 : ((b[sortbyoptions[this.state.key]] > a[sortbyoptions[this.state.key]]) ? -1 : 0));
        }
        else{
          array[i].children.sort((a,b) => 
          (a[sortbyoptions[this.state.key]] < b[sortbyoptions[this.state.key]]) ? 1 : ((b[sortbyoptions[this.state.key]] < a[sortbyoptions[this.state.key]]) ? -1 : 0));
        } 
        if(this.state.order==1){
          array.sort((a,b) => 
           (a.children[0][sortbyoptions[this.state.key]] > b.children[0][sortbyoptions[this.state.key]]) ? 1 :
            ((b.children[0][sortbyoptions[this.state.key]] > a.children[0][sortbyoptions[this.state.key]]) ? -1 : 0));
         }
         else{
           array.sort((a,b) => 
           (a.children[0][sortbyoptions[this.state.key]] < b.children[0][sortbyoptions[this.state.key]]) ? 1 : 
           ((b.children[0][sortbyoptions[this.state.key]] < a.children[0][sortbyoptions[this.state.key]]) ? -1 : 0));
         }              
       }
        break;
      }
      else if(array.children!==undefined){
        array=array.children;
         }
      else{
        break;
      }
    }
  //console.log(array);
  let arr=arr1;
  let flag=false;
  //
  let temp=[];

  for(let i=0;i<arr.children.length;i++){
    if(arr.children[i].children.length>1){
      flag=true;
      break;
    }
  }

  //multiple stack
  if(arr.children.length>0){
    temp.length=0;
 
    //multiple stack multiple parameter
    if(flag){
        temp.length=0;
        for(let i=0;i<arr.children.length;i++){
          if(arr.children[i].children.length>1)
          {
              for(let j=0;j<arr.children[i].children.length;j++)
              {
              if(j==0){
              
                let childitems=[];
                let parentitems=[];
                let keys=Object.keys(arr.children[i].children[j])
                let values=Object.values(arr.children[i].children[j])
                let pkeys=Object.keys(arr.children[i])
                let pvalues=Object.values(arr.children[i])
                console.log(pvalues)

                for(let i=1;i<pkeys.length-1;i++)
                {
                  parentitems.push(
                    <span>
                      <h4 align="left">{pkeys[i]}</h4>
                      <p align="left">{pvalues[i]}</p>
                    </span>
                  )
                }                
        
                for(let i=1;i<keys.length-1;i++)
                {
                  childitems.push(
                    <span>
                      <h4 align="left">{keys[i]}</h4>
                      <p align="left">{values[i]}</p>
                    </span>
                  )
                }                

              temp.push(
                <Card type="outer" bordered={false}>
                  {parentitems}
                    <Card type="inner"  bordered={false}>
                      {childitems}
                   </Card>
               </Card>
              );
              }
              else{
              let parentitems=[];
              let keys=Object.keys(arr.children[i].children[j])
              let values=Object.values(arr.children[i].children[j])
              for(let i=1;i<keys.length-1;i++)
              {
                parentitems.push(
                  <span>
                    <h4 align="left">{keys[i]}</h4>
                    <p align="left">{values[i]}</p>
                  </span>
                )
              }

              temp.push(  
                  <Card type="outer"  bordered={false}>       
                      <Card type="inner"  bordered={false}>
                        {parentitems}
                     </Card>
                 </Card>
                );
              }//for

          }//if
        }
          else{

            let childitems=[];
            let parentitems=[];
            let keys=Object.keys(arr.children[i].children[0])
            let values=Object.values(arr.children[i].children[0])
            let pkeys=Object.keys(arr.children[i])
            let pvalues=Object.values(arr.children[i])
            console.log(pvalues)

            for(let i=1;i<pkeys.length-1;i++)
            {
              parentitems.push(
                <span>
                  <h4 align="left">{pkeys[i]}</h4>
                  <p align="left">{pvalues[i]}</p>
                </span>
              )
            }                
    
            for(let i=0;i<keys.length-1;i++)
            {
              childitems.push(
                <span>
                  <h4 align="left">{keys[i]}</h4>
                  <p align="left">{values[i]}</p>
                </span>
              )
            }                


          temp.push(
            <Card type="outer">
              {parentitems}
                <Card type="inner" >
                  {childitems}
               </Card>
           </Card>
          );
          }    
        }
        
    }//if

//multiple stack single parameter
  else{
        temp.length=0;
        
        for(let i=0;i<arr.children.length;i++){
             // console.log(arr.children[i].Stack) 

             let parentitems=[];
             let keys=Object.keys(arr.children[i])
             let values=Object.values(arr.children[i])
             for(let i=2;i<keys.length-1;i++)
             {
               parentitems.push(
                 <span>
                   <h4 align="left">{keys[i]}</h4>
                   <p align="left">{values[i]}</p>
                 </span>
               )
             }

             temp.push(
                <Card type="outer"  bordered={false}>
                  <h4 align="left">{keys[1]}</h4>
                  <p align="left">{values[1]}</p>
                    <Card type="inner"  bordered={false}>
                      {parentitems}
                   </Card>
              </Card>,
              );
                      
            }

  }//else

}

  //single stack sinlge parameter
  else{
        
         //console.log("sssssssssss")
          temp.length=0;
          let parentitems=[];
          let keys=Object.keys(arr)
          console.log(keys)
          let values=Object.values(arr)
          for(let i=3;i<keys.length-1;i++)
          {
            parentitems.push(
              <span>
                <h4 align="left">{keys[i]}</h4>
                <p align="left">{values[i]}</p>
              </span>
            )
          }
          temp.push(
          <Card type="outer"  bordered={false}>
            <h4 align="left">{keys[1]}</h4>
            <p align="left">{values[1]}</p>
              <Card type="inner"  bordered={false}>
                {parentitems}
              </Card>
          </Card>
          );                                                                                             
                   
  }
this.setState({array:[...temp]});
};


 onShowSizeChange=(current, pageSize)=> {
  console.log(current, pageSize);
}
 
loop=()=>{
  for(let i=0; i<sortbyoptions.length; i++){
    this.test.push(
      <Card  type="inner" title={sortbyoptions[i]}
      extra={
        <span>
          <a onClick={(e)=>{this.setState({order:1});this.setState({key:i})}}><CaretUpOutlined style={{color:'orange'}}/></a>
          <br/>
          <a onClick={(e)=>{this.setState({order:0});this.setState({key:i})}}><CaretDownOutlined style={{color:'grey'}}/></a>
          </span>
        } bordered={false}>
      </Card>
    );
  }
};


render(){

  return(
    <div align="center">
      <div>
          <Select  style={{ width: '30%' }} placeholder={"Select Industry"} 
          onSelect={(value) => { this.display(value, datas)}}
           tokenSeparators={[',']}>
            {children}
          </Select>,        
      </div>
          <br/><br/>

        <div >
          <Button type="primary" 
          size="small" shape="round" style={{color:'white',background:'grey',borderColor:'grey'}}
          onClick={this.showModal}>SORT</Button>
        </div>
        <br/><br/>
        <div style={{display: 'flex',  justifyContent:'center',alignItems:'center'}}>
        <List
          bordered={false}
          itemLayout="vertical"
          pagination={paginationforsort}
          dataSource={[...this.state.array]}
          renderItem={item => (
          <List.Item>
            <Card hoverable={true} bordered={false}>
            {item}
            </Card>
          </List.Item>
          )}
          />
    
        </div>
    
      <Modal 
         visible={this.state.isModalVisible} 
         onCancel={this.handleCancel}
        footer={null}
        bodyStyle={{height:'100%'}}
        >
          <Card bordered={false} >
            <h2 align="center">SORT BY</h2>
             {this.test}
          </Card>
    
          <div align="center">
            <Button type="primary" size="large" shape="round" style={{color:'white',background:'orange',borderColor:'orange'}}
             onClick={(e) => {this.display1(e, datas[this.state.index]);this.handleCancel()}}>APPLY</Button>
          </div>
      </Modal>
    </div>
  );

}

}
