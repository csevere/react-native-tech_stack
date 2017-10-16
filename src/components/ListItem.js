import React, {Component} from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux'; //use connect to call action creator 
import { CardSection } from './common';
import  * as actions from '../actions'; //give me everything exported from actions file


class ListItem extends Component{

    renderDescription(){
        const { library, selectedLibraryId} = this.props; 

        if(library.id === selectedLibraryId){
            return(
                <Text>{library.description}</Text>

            );
        }
    }

    render(){
        const { titleStyle } = styles;
        const { id, title } = this.props.library; 



        return(
            <TouchableWithoutFeedback 
                onPress = {() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style = {titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View> 
            </TouchableWithoutFeedback>

        );

    }
}

const styles = {
    titleStyle:{
        fontSize: 20,
        padding: 15,
        fontFamily: 'Copperplate'
    }
}

const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId }

};

export default connect(mapStateToProps, actions)(ListItem); 

//the first argument is for mapStateToProps, if you don't to pass mapStateToProps, replace it with null 
//touchablewithoutfeedback - no highlight or fancy opacity fade, etc 