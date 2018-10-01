import React from 'react';
import { Text } from 'react-native';


class ListItem extends React.Component {
  render() {
    return(
      <Text>{this.props.library.title}</Text>
    );
  }

}

export default ListItem;
