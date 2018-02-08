import React from 'react';
import { connect } from 'dva';
import styles from './demo.css';
import MainLayout from '../components/MainLayout/MainLayout';

function Demo({location,count,dispatch }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
      <div className={styles.record}>Highest Record: {count.record}</div>
      <div className={styles.current}>{count.current}</div>
      <div className={styles.button}>
        <button onClick={() => { dispatch({type: 'count/add'}); }}>+</button>
      </div>
      </div>
    </MainLayout>
  );
}

function mapStateToProps_b(state){
	console.log(state.count);
	return {count:state.count}
}

export default connect(mapStateToProps_b)(Demo);
