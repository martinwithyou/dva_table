export default{
	namespace:'table',
	state:{
		name:2222,
		value:2222
	},
    reducers: {
    add(state) {
    	const newName = "this is"+" my new name";
    	const newValue = "this is"+" my new value"
        return { ...state,
              name: newName ,
              value: newValue,
            };
    },
    minus(state) {
        const newName = "666666";
    	const newValue = "666666"
        return { ...state,
              name: newName ,
              value: newValue,
            };
    }
    }
 
}
