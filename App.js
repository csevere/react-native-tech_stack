import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import reducers from './src/reducers';
import { Header } from './src/components/common';
import LibraryList from './src/components/LibraryList';
 

const App = () =>{
  return (
    <Provider store = {createStore(reducers)}>
      <View style = {{flex:1}}>
        <Header headerText = "Tech Stack" /> 
        <LibraryList /> 
      </View>
    </Provider> 

  );

} ;

export default App; 

//Store holds our state 
//create a reducer and pass it in to the store
//create selection reducer to select just one item with specific id