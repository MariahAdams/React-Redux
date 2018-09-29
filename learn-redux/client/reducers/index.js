import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from '../reducers/posts';
import comments from '../reducers/comments';

const rootReducer = combineReducers({posts, comments, routing: routerReducer });

export default rootReducer;