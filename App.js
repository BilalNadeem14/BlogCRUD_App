import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/Context/BlogContext';
//we don't have BlogProvider anymore
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import Icon2 from 'react-native-vector-icons/Entypo';

const Stack = createStackNavigator()

export default () => {
  return(
    // <View>
    //   <Text>hi</Text>
    // </View>
    //writing Provider instead of BlogProvider
    <Provider>
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="Index Screen" screenOptions={{ title: 'same for everyone'}}>
          <Stack.Screen name="Index Screen" component={IndexScreen} 
          options={
         ({navigation})=>  {
           return  { 
            title: 'Blogs',  
            headerRight: (props) => {
   
              return <TouchableOpacity onPress={() => navigation.navigate('Create Screen')}>
              <Icon2 //style={styles.icon}
                name="plus"
                backgroundColor='black' //"#3b5998"
                size={30}
                //onPress={this.loginWithFacebook}
              />
            </TouchableOpacity>
            }
            }
         }
              } />
          <Stack.Screen name="Show" component={ShowScreen} 
          options = {
            ( {navigation, route} ) => {
              return {
                title: 'Show Screen',
                headerRight: () => {
                  console.log('id', route.params.id)
                  return <TouchableOpacity onPress={() => navigation.navigate('Edit Screen', { id: route.params.id })}>
                    <Icon2 
                      name="edit"
                      backgroundColor='black'
                      size={30}
                    />
                  </TouchableOpacity>
                }
              }
            }
          }
          
         />
          <Stack.Screen name="Create Screen" component={CreateScreen} options={{ title: 'Create a new Blog' }} />
          <Stack.Screen name="Edit Screen" component={EditScreen} options={{ title: 'Edit screen' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}