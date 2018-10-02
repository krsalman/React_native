import React from 'react';
import { Text , View ,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import CardSection from './CardSection';
import * as actions from '../actions';

class ListItem extends React.Component {
  renderDescription(){
    // const { library, selectedLibraryId } = this.props;
    console.log(this.props);

    if(this.props.library.item.id === this.props.selectedLibraryId){
      return(
        <Text> {this.props.library.item.description}</Text>
      );
    }
  }

  render()  {
    const { titleStyle } = styles;
    const {id ,title } = this.props.library;

    return (
      <TouchableOpacity onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{this.props.library.item.title}</Text>
                      {this.renderDescription()}
          </CardSection>


          {this.renderDescription()}

        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  titleStyle:{
    fontSize: 18,
    paddingLeft: 15
  }

};

const mapStateToProps = state =>
{
  return { selectedLibraryId : state.selectedLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem);
