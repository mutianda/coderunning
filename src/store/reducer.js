const stateDefualt = {
    user:{
        username:'admin',
        password:'123'
    }
}     //存放数据

const reducers = function(state=stateDefualt,action){
    if(action.type=='save_user'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.user = action.value
        return  newState
    }

    return state

}   //用来存放逻辑代码
export default reducers;
