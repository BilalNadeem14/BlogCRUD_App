import React, { useState, useContext } from 'react';
import {View, Text, TextInput, StyleSheet } from 'react-native';
import { Context } from '../Context/BlogContext'
//import BlogPostForm from '../components/BlogPostForm'
import BlogPostForm from '../components/BlogPostForm'; 
 
const EditScreen = ({ navigation, route }) => {
    const { state, editBlogPost } = useContext(Context)
    const id = route.params.id
    const blogPost = state.find( (blog) => blog.id === id)
    
    // const [title, setTitle] = useState(blogPost.title)
    // const [content, setContent] = useState(blogPost.content)


    return <BlogPostForm 
        initialValues = {{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
            editBlogPost(id, title, content, () => navigation.pop()) //navigation.pop() will do the same as back button do, because it will pop off the screen from the stack where the user had navigated and return us back to the previous screen //console.log(title, content)
        }}
    />

    // return <View>
    //     <Text>Edit Screen</Text>
    //     <Text>{route.params.id}</Text>
    //     <Text>Title:</Text>
    //     <TextInput
    //       style={{borderWidth: 1, borderColor: 'red'}} 
    //       value = {title}
    //       onChangeText={(text) => setTitle(text)}
    //     />
    //     <Text>title is: {title}</Text>
    // </View>
}

const styles = StyleSheet.create({});

export default EditScreen;