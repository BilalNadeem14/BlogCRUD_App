import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as blogContext } from '../Context/BlogContext'

const ShowScreen = ({ route }) => {
    const { state } = useContext(blogContext)
    console.log('state', state)
    const blogPost = state.find((blog) => blog.id === route.params.id)
    console.log('blogPost found', blogPost)
    return <View>
        <Text>Show Screen {'\n'}Blog Post#{route.params.id}</Text>
        <Text>Title: {blogPost.title}</Text>
        <Text>Content: {blogPost.content}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default ShowScreen;