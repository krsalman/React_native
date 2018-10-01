import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Header from './components/Header';
import LibraryList from './components/LibraryList';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ createStore(reducers)}>
        <Header headerText="Tech Stack" />
        <LibraryList  />
      </Provider>


    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
