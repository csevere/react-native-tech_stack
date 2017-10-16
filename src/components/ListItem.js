import React, {Component} from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View, 
    LayoutAnimation 
} from 'react-native';
import { connect } from 'react-redux'; //use connect to call action creator 
import { CardSection } from './common';
import  * as actions from '../actions'; //give me everything exported from actions file


class ListItem extends Component{

    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    renderDescription(){
        const { library, expanded} = this.props; 
        const { textStyle } = styles;

        if(expanded){
            return(
                <CardSection>
                    <Text style = {textStyle}>
                        {library.description}
                    </Text>
                </CardSection> 
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
    },

    textStyle:{
        paddingLeft: 15,
        flex: 1

    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id
    return { expanded }

};

export default connect(mapStateToProps, actions)(ListItem); 

//the first argument is for mapStateToProps, if you don't to pass mapStateToProps, replace it with null 
//touchablewithoutfeedback - no highlight or fancy opacity fade, etc 
//mapStateToProps hold two arguments > ownProps are the props that were passed to the component that we're wrapping, the listitem comp, when displayed by librarylist, it is passed a library, which is why we reference this.props.library; 
//ownProps object is exactly equal to this.props inside the component; any props we pass into this listitem will show up in mapStateToProps as ownProps
// expanded pulls some amt of logic out of the component