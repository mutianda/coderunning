import { createStore } from 'redux';
import reducers from './reducer';   //用来存放store仓库的逻辑代码和state数据

const store = createStore(
    reducers,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
