import { combineReducers } from 'redux';
import navigation from './navigation';
import movies from './movies';

export default combineReducers({
  navigation,
  movies
});