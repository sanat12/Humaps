import React from 'react';
import 'antd/dist/antd.css';

import {Table, Tag, Space } from 'antd';
import {paginationfortable, tableprops,styleforcategory,styleforheader,
  styleforindustry,styleforcontact,styleforcpcb,styleforganga} from './window.js';
import {data} from './data.js';

const columns = [
  {
    title: <a >Industry</a>,
    dataIndex: 'industries',
    key: 'industries',
    render: text => <a style={styleforindustry}>{text}</a>,
    sorter:true
  },
  {
    title: <a>Categories</a>,
    dataIndex: 'categories',
    key: 'categories',
    render: text => <a style={styleforcategory}>{text}</a>,
  },
  {
    title: <a>Contact</a>,
    dataIndex: 'contact',
    key: 'contact',
    render: text => <a style={styleforcontact}>{text}</a>,
  },
  {
    title: <a>CPCB Code</a>,
    dataIndex: 'cpcb',
    key: 'cpcb',
    render: text => <a style={styleforcpcb}>{text}</a>,
  },
    {
    title: <a>Ganga Basin</a>,
    dataIndex: 'ganga',
    key: 'ganga',
    render: text => <a style={styleforganga}>{text}</a>,
  },

  {
    title: <a>Action</a>,
    key: 'action',
   
    render: (text, record) => (
      <Space size="middle">
        <a onClick={details}>Details</a>
        <a onClick={live}>Live</a>
      </Space>
    ),
  },
  
];


	
function details(event){
	console.log("details");
}
function live(event){
	console.log("live");
}
class Tableview extends React.Component{
render(){
return(<Table 
filterDropdownVisible={true}
columns={columns}
// style={tableprops}
dataSource={data} 
size={tableprops.size}
bordered={'true'}
pagination={
  paginationfortable
}
filterDropdownVisible={true}
sorter={true}
defaultExpandAllRows={true}
expandIconAsCell={true}
expandIconColumnIndex={-1}
 />);
}
}
export default Tableview;