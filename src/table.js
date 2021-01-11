import React from 'react';
import './table.css'
import { Table, Tag, Space } from 'antd';

const data = [
  {
    key: '1',
    'industries': 'John Brown',
    'categories':'whatever',
    'contact': 'New York No. 1 Lake Park',
    'cpcb':'yes',
    'ganga':'yes',
  },
    {
    key: '2',
    'industries': 'John Brown',
    'categories':'whatever',
    'contact': 'New York No. 1 Lake Park',
    'cpcb':'yes',
    'ganga':'yes',
  },
    {
    key: '3',
    'industries': 'John Brown',
    'categories':'whatever',
    'contact': 'New York No. 1 Lake Park',
    'cpcb':'yes',
    'ganga':'yes',
  },
    {
    key: '4',
    'industries': 'John Brown',
    'categories':'whatever',
    'contact': 'New York No. 1 Lake Park',
    'cpcb':'yes',
    'ganga':'yes',
  },
    {
    key: '5',
    'industries': 'John Brown',
    'categories':'whatever',
    'contact': 'New York No. 1 Lake Park',
    'cpcb':'yes',
    'ganga':'yes',
  },
    {
    key: '6',
    'industries': 'John Brown',
    'categories':'whatever',
    'contact': 'New York No. 1 Lake Park',
    'cpcb':'yes',
    'ganga':'yes',
  },
    {
    key: '7',
    'industries': 'John Brown',
    'categories':'whatever',
    'contact': 'New York No. 1 Lake Park',
    'cpcb':'yes',
    'ganga':'yes',
  },
    {
    key: '8',
    'industries': 'John Brown',
    'categories':'whatever',
    'contact': 'New York No. 1 Lake Park',
    'cpcb':'yes',
    'ganga':'yes',
  },
    {
    key: '9',
    'industries': 'John Brown',
    'categories':'whatever',
    'contact': 'New York No. 1 Lake Park',
    'cpcb':'yes',
    'ganga':'yes',
  },
    {
    key: '10',
    'industries': 'John Brown',
    'categories':'whatever',
    'contact': 'New York No. 1 Lake Park',
    'cpcb':'yes',
    'ganga':'yes',
  },
    {
    key: '11',
    'industries': 'John Brown',
    'categories':'whatever',
    'contact': 'New York No. 1 Lake Park',
    'cpcb':'yes',
    'ganga':'yes',
  },
    {
    key: '12',
    'industries': 'John Brown',
    'categories':'whatever',
    'contact': 'New York No. 1 Lake Park',
    'cpcb':'yes',
    'ganga':'yes',
  },
    {
    key: '13',
    'industries': 'John Brown',
    'categories':'whatever',
    'contact': 'New York No. 1 Lake Park',
    'cpcb':'yes',
    'ganga':'yes',
  },
    {
    key: '14',
    'industries': 'John Brown',
    'categories':'whatever',
    'contact': 'New York No. 1 Lake Park',
    'cpcb':'yes',
    'ganga':'yes',
  },
    {
    key: '15',
    'industries': 'John Brown',
    'categories':'whatever',
    'contact': 'New York No. 1 Lake Park',
    'cpcb':'yes',
    'ganga':'yes',
  },
    {
    key: '16',
    'industries': 'John Brown',
    'categories':'whatever',
    'contact': 'New York No. 1 Lake Park',
    'cpcb':'yes',
    'ganga':'yes',
    children:[
        {
    key: '15',
    'industries': 'John Brown',
    'categories':'whatever',
    'contact': 'New York No. 1 Lake Park',
    'cpcb':'yes',
    'ganga':'yes',
  },
    ]
  },
];

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
	console.log(window.innerWidth);
return(<Table columns={columns}
 dataSource={data} 
 pagination={{ pageSize: 10 }}
 scroll={{x:true}}
 />);
}
export default Tableview;