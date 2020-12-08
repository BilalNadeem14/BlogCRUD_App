//import React, { useState, useReducer } from 'react'; 
import createDataContext from './createDataContext'

// const BlogContext = React.createContext();   //delete it

const blogReducer = (state, action) => {
    console.log("action", action)
    switch(action.type) {
        case 'add_blogpost':
            return [...state, 
                { 
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title, //`Blog Post #${state.length + 1}`
                    content: action.payload.content
                }]
        case 'remove_blogpost':
            console.log('called ', action.payload)
            return state.filter((blogPost) => blogPost.id !== action.payload) //if the function returns true then it will be (added in the state) OR returned otherwise if the return of this func is false then it will not be (added to the state) OR returned(which will later on add to the state)
        case 'edit_blogpost':
            return state.map((blogPost) => {
                if (blogPost.id == action.payload.id) {
                    //simply we could just return action.payload
                    blogPost.title = action.payload.title
                    blogPost.content = action.payload.content
                }
                return blogPost
                /*
                    //same as if else
                    return blogPost.id === action.payload.id ? action.payload : blogPost;
                */
                
            })
        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callBack) => {
        dispatch( { type: 'add_blogpost', payload: { title, content }})   //payload is same as => { title: title, content: content }
        if (callBack) {
            callBack()
        }
    }
}

const removeBlogPost = (dispatch) => {
    console.log("remove")
    return (id) => {
        console.log('remove func id:', id)
        dispatch( { type: 'remove_blogpost', payload: id})  //type => thing to do, payload => id of the blog we want to delete
    }
}

const editBlogPost = (dispatch) => {
    //console.log()
    return (id, title, content, callBack) => {
        console.log("edit function id: ", id)
        dispatch({
            type: 'edit_blogpost', 
            payload: { id, title, content } //{ id: id, title: title, content: content }
        })
        if (callBack) {
            callBack()
        }
    }
}

/*  Delete this whole, we just need the dispatch function part so i'll copy it above
export const BlogProvider = ( {children} ) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, [])    //{title: 'hello'}

    const addBlogPost = () => {
        dispatch( { type: 'add_blogpost'})
    }

    // const addBlogPost = () => {
    //     console.log('func called')
    //     setBlogPosts([...blogPosts, { title: `Blog Post # ${blogPosts.length + 1}`}])
    // }
    // inside an object: addBlogPost is equal to addBlogPost: addBlogPost , we do this only when key and value has same names

    return <BlogContext.Provider value={{data: blogPosts, addBlogPost }}> 
        {children}    
    </BlogContext.Provider>
}
//as we are not exporting blog context from here so hence delete it as well
export default BlogContext;
*/

export const { Context, Provider} = createDataContext(
    blogReducer, 
    { addBlogPost, removeBlogPost, editBlogPost }, //2nd argument => we want to send an object containing all the different actions => addBlogPost 
    [{ title: 'Test Post', content: 'Test Content', id: 1}]  //initial default state value    
)

//In this last stmt, createDataContext function is called and its return value is returned from this file, and whenever we want to use BlogContext,
//We import this file and use its returned (state and 'object of callBack functions')