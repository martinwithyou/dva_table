import React from 'react';
import { connect } from 'dva';
import {Table, Pagination,Popconfirm } from 'antd';
import styles from './error.css';
import { PAGE_SIZE } from '../constants'
import MainLayout from '../components/MainLayout/MainLayout';

function Users({list:dataSource,total,page:current}){
	function deleteHandler(id){
		console.log(`todo:${id}`)
	}
	const columns = [
	  {
	  	title:'Name',
	  	dataIndex:'name',
	  	key:'name',
	  	render:text => <a href="">{text}</a>
	  },
	  {
	  	title:'Email',
	  	dataIndex:'email',
	  	key:'email'
	  },
	  {
	  	title:'Website',
	  	dataIndex:'website',
	  	key:'website'
	  },
	  {
	  	title:'Operation',
	  	key:'operation',
	  	render:(text,{id})=> (
	  		<span className={styles.operation}>
	  		<a href="">Edit</a>
	  		<Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null,id)}>
	  		  <a href="">Delete</a>
	  		</Popconfirm>
	  		</span>
	  	)
	  }
	];
	
	return(
		<div className={styles.normal}>
		  <div>
		    <Table
		       columns={columns}
		       dataSource={dataSource}
		       rowKey={record => record.id}
		       pagination={false}
		    />
		    <Pagination
		       className="ant-table-pagination"
		       total={total}
		       current={current}
		       pageSize={PAGE_SIZE}
		    />
		  </div>
		</div>
	)
}

function mapStateToProps404(state){
	const {list,total,page}=state.newUsers;
	console.log(state);
	return{
		list,
		total,
		page
	}
}

export default connect(mapStateToProps404)(Users);
