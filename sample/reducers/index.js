import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
import { connect } from 'react-redux';

export default combineReducers ({

  libraries : LibraryReducer,
  selectedLibraryId : SelectionReducer

});
