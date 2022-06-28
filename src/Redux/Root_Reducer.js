import { combineReducers } from 'redux';
import { DataReduce } from './AllDatas/AllData';
const RootReducer=combineReducers({
  Data:DataReduce

})
export default RootReducer;