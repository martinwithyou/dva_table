import * as usersService from '../services/users'
export default{
	namespace:'newUsers',
	state:{
		list:[],
		total:null
	},
    reducers: {
    save(state,{payload:{data:list,total}}) {
        return { ...state,
                 list,
                 total
            };
    }
    },
    effects:{
    	*fetch({{payload:{page}}},{call,put}){
    		const {data,headers}=yield call(usersService.fetch,{page});
    		yield put({type:'save',payload:{data,total:headers['x-total=count']}});
    		
    	},
    },
    subscription:{
    	return history.listen(({pathname,query})=>{
    		if(pathname === '/users'){
    			dispatch({type:'fetch',payload:query});
    		}
    	});
    }
 
}