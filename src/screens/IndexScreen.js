import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
//import BlogContext from '../Context/BlogContext';
import { Context } from '../Context/BlogContext';
//Context as BlogContext
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';

const IndexScreen = ({navigation}) => {
    //instead of destructuring data we are destructuring state
    const { state, addBlogPost, removeBlogPost} = useContext(Context)    //we are referencing Context instead of BlogContext
    //There's no need to destructure the callBack funcs because they're already destructured from the createDataContext even before they were returned => By the ...boundActions
    ///as ... spreads OR Destructures the values of the Object 
    
    //console.log(typeof(value))
    //const {addBlogPost, removeBlogPost} = callBacks
    const { title, id } = state
    return <View>
        <Text>Index Screen</Text>
        {/* <Button style={{backgroundColor: 'black'}}
            title="Add a Blog"
            onPress={() => addBlogPost()}  //() => addBlogPost()
            /> */}
        <FlatList 
            data={state}
            keyExtractor={(blogPost) => {
                return blogPost.title
            }}
            renderItem={({ item }) => {
                return <View style={styles.row}>
                    <TouchableOpacity 
                      style={styles.blog}
                      onPress={() => navigation.navigate('Show', { id: item.id})}  
                    >
                        <Text style={styles.title}>
                            {item.title} - id = {item.id}
                        </Text>
                        <TouchableOpacity 
                        style={{borderColor: 'red', borderWidth:1}}
                        onPress={() => removeBlogPost(item.id)}
                        >      
                            <Icon style={styles.icon}
                                name="trash"
                                backgroundColor='black' //"#3b5998"
                                // size={30}
                                //onPress={this.loginWithFacebook}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            }}
        />
       

    </View>
}

// IndexScreen.navigationOptions = (screenProps) => {
//     return {
//         headerRight: ()=>  <Text>Hi</Text>,
//         headerRightContainerStyle:{
//             backgroundColor: 'red',
//             width: 20,
//             height: 20
//         }
//     }
// }

IndexScreen['navigationOptions'] = screenProps => ({
    title: 'Home'
})




const styles = StyleSheet.create({
    blog: {
        flex:1,
        //borderColor: 'red',
        //borderWidth:1,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
        },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        //borderBottomWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;