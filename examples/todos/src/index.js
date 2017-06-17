// import React from 'react'
// import { render } from 'react-dom'
import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import App from './components/App'
// import reducer from './reducers'


const counter = (state = 0, action) => {

  switch (action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counter);

console.log('initial application state');
console.log(store.getState());

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
