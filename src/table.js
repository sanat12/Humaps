import React from 'react';
import "./table.css";
import {Table, Tag, Space } from 'antd';
import {paginationfortable, tableprops} from './window.js';
import {data} from './data.js';

const columns = [
  {
    title: 'industries',
    dataIndex: 'industries',
    key: 'industries',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Categories',
    dataIndex: 'categories',
    key: 'categories',
  },
  {
    title: 'contact details',
    dataIndex: 'contact',
    key: 'contact',
  },
  {
    title: 'CPCB Code',
    dataIndex: 'cpcb',
    key: 'cpcb',
  },
    {
    title: 'Ganga Basin Disposal',
    dataIndex: 'ganga',
    key: 'ganga',
  },
  {
    title: 'Action',
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
function Tableview(){

return(<Table 
filterDropdownVisible={true}
columns={columns}
dataSource={data} 
size={tableprops.size}
bordered={tableprops.bordered}
pagination={
  paginationfortable
}
filterDropdownVisible={true}
defaultExpandAllRows={true}
expandIconAsCell={true}
expandIconColumnIndex={-1}
 />);
}

export default Tableview;
