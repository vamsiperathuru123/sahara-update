import React,{createContext,useContext,useReducer} from 'react';
import reducer from './reducer';

export const StateContext = createContext();
export const StateProvider = ({reduce,intialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,intialState)}>
        {children}

    </StateContext.Provider>

);
export const useStateValue = () => useContext(StateContext);