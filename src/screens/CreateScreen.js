import React, {useContext} from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context as blogContext } from '../Context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'


const CreateScreen = ({ navigation, route }) => {
    const {addBlogPost} = useContext(blogContext)
    
    return (
        <BlogPostForm 
            //initialValues = {{ title: '', content: '' }}
            onSubmit={(title, content) => {
            addBlogPost(title, content, () => navigation.navigate('Index Screen'))
        }} />
    )
}

const styles = StyleSheet.create({

});

export default CreateScreen;