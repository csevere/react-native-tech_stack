import React, { Component } from 'react';
import { ListView } from 'react-native'; 
import { connect } from 'react-redux'; 
import ListItem from './ListItem'

class LibraryList extends Component{
    componentWillMount(){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries)

    }

    renderRow(library){
        return <ListItem library = {library}/>; 

    }

    render(){
        return(
            <ListView
                dataSource = {this.dataSource}
                renderRow = {this.renderRow}
            />
        );
    }
}

const mapStateToProps = state =>{
    return { libraries: state.libraries };

}

//mapStateToProps takes our global state object, our app's state, maps it, take the properties and provides them as props to our library list

export default connect(mapStateToProps)(LibraryList); 

//calls connect function, returns it, and then call it with LibraryLIst

//to get data and push it in library list from store, must use Connect helper
//feature of react-redux library 
//connects component to redux store/ give librarylist access to the libraries

//can pass in first argument as a funciton using mapStateToProps

//Tell listview what data it should be using; pass in list of libraries to it 

//place logic to create listview inside lifecycle method, component will mount>> the instant the comp is about to render, tell listview where to get its data from 