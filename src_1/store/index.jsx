import {createStore,applyMiddleware,combineReducers} from 'redux' //创建 store 中间价连接
import {composeWithDevTools} from 'redux-devtools-extension'
// import connt from './Redurcrs/connt'  // 处理事件的redurcer
// import people from './Redurcrs/people'
import AllcombineReducers from './Redurcrs'
import thunk from 'redux-thunk' //中间件 异步actions
export default createStore(AllcombineReducers,composeWithDevTools(applyMiddleware(thunk)))
// export default createStore(combineReducers({connt,people}),composeWithDevTools(applyMiddleware(thunk)))
//store 连接 redurce 跟 action  components