const users = {
    id:'',
    username:'',
    email:'',
    profile_pict:''
}

const usersReducer = (state=users, action) => {
    if(action.type === 'REGISTER_SUCCESS'){
        return action.payload
    }
    else{
        return state
    }
}

export default usersReducer