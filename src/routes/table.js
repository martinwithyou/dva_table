import React from 'react';
import { connect } from 'dva';
import styles from './demo.css';
import MainLayout from '../components/MainLayout/MainLayout';

function Demo1({location,table,dispatch }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
      <div className={styles.record}>{table.name} </div>
      <div className={styles.current}>{table.value}</div>
      <div className={styles.button}>
        <button onClick={() => { dispatch({type: 'table/add'}); }}>+</button>
         <button onClick={() => { dispatch({type: 'table/minus'}); }}>-</button>
      </div>
      </div>
    </MainLayout>
  );
}

function mapStateToProps_a(state){
	console.log(state.table);
	return {table:state.table}
}

export default connect(mapStateToProps_a)(Demo1);
