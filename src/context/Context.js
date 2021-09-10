import React ,{useReducer,createContext} from 'react'
import ReducerContext from './ReducerContext'
const initialState=[]
export const TrackerContext=createContext(initialState)

const ProviderComponent=({childern})=>{

    const [transactions, dispatch] = useReducer(ReducerContext,initialState)

     const deleteTransaction=(id)=>dispatch({type:"DELETE",id});
     const addTransaction=(transaction)=>dispatch({type:"ADD",transaction});

    return(

        <TrackerContext.Provider value={{deleteTransaction,addTransaction}}>
        {childern}
        </TrackerContext.Provider>
    )
    
}
export default ProviderComponent;