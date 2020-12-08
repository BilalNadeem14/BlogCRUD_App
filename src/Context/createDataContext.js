import React, { useReducer } from 'react'

//whenever this func is called it is going to create a new data context automatically itself
export default (reducer, actions, initialState) => {  //actions will be an object which will have all these different callback functions which will be available to its child components
    const Context = React.createContext()

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        // actions === { addBlogPost: (dispatch) => { return () => {} } }
        const boundActions = {}
        for (let key in actions) {
            /// key === 'addBlogPost'   //boundActions[key] === boundActions[addBlogPost]
            boundActions[key] = actions[key](dispatch)     //actions[key](dispatch) is like addBlogPost(dispatch)
        }

        // only writing state as it is equal to state: state
        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    }

    return { Context, Provider}
}