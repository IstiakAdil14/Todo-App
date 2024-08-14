import { useReducer } from "react"

const initialState = {
    showTextFlag: false,
    changeTextStyleFlag: false,
};


const HIDE_TEXT = 'HIDE_TEXT';
const SHOW_TEXT = 'SHOW_TEXT';
const CHANGE_TEXT = 'CHANGE';

function reducer(state, action) {
    switch (action.type) {
        case "HIDE_TEXT":  
        return{
            ...state,
            showTextFlag: false,
        }

        
    
        case "SHOW_TEXT":  
        return {
            ...state,
            showTextFlag: true,
        }

        case "CHANGE_TEXT":  
        return {
            ...state,
            changeTextStyleFlag:!state.changeTextStyleFlag,
        }

        default:
            return state;
    }
}

export default function UseReducer (){


    const  [state, dispatch] = useReducer(reducer, initialState)

    console.log(state);
    

    return <div>

        {
            state?.showTextFlag ? <h3 style={{backgroundColor: state?.changeTextStyleFlag ? 'black' : 'red'}}>Use Reducer </h3>: null
        }

        
        <button onClick={()=> dispatch({type: 'HIDE_TEXT'})}>Hide Text</button>
        <button onClick={()=> dispatch({type: 'SHOW_TEXT'})}>Show Text</button>
        <button onClick={()=> dispatch({type: 'CHANGE_TEXT'})}>Change Text</button>

    </div>
}