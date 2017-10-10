import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class LibraryList extends Component{
    render(){
        return;
    }
}

export default connect()(LibraryList); //calls connect function, returns it, and then call it with LibraryLIst

//to get data and push it in library list from store, must use Connect helper
//feature of react-redux library 
//connects component to redux store/ give librarylist access to the libraries
