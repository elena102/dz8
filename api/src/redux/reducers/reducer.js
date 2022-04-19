import { type } from "@testing-library/user-event/dist/type"

const initialState = {
    cat:[],
    loading:false
}

export const postReducer = (state = initialState, action) =>{
    switch(action.type){
        case'loading':
        return{
            ...state,
            loading:true
        }
        case'get-cat':
        return{
            ...state,
            cat:action.payload,
            loading:false
        }
    
        default:
            return state
    }
}
export const loadCat = () =>{
   return  (dispatch) =>{
      dispatch({
     type:'loading'})
        try{
   fetch('https://api.thecatapi.com/v1/images/search/')
    .then(response => response.json())
    .then((json) => {
        dispatch({
        type: ('loading'),
        payload: json
        })
    })    
        
        }catch(error){console.log(error)}
    }
}      
   

    
    


