import { combineReducers } from 'redux';
import { DataReduce } from './AllDatas/AllData';
import NavReducer from './NavReduce/NavReduce';
const RootReducer=combineReducers({
  Data:DataReduce,
  Navbar:NavReducer

})
export default RootReducer;