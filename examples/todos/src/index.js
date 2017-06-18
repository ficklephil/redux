import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
// import { render } from 'react-dom'
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

let store = createStore(counter);

console.log('initial application state');

//Redux store.getState()
console.log(store.getState());

//Redux store.dispatch()
store.dispatch({type: 'INCREMENT'});
console.log(store.getState());

document.addEventListener('click', () => {
  store.dispatch({ type : 'INCREMENT'});
});

const Counter = ({value}) => (
  <h1>{value}</h1>
);

const render = () => {
  ReactDOM.render(
    <Counter value = {store.getState()}/>,
    document.getElementById('root')
  )
};

//Redux subscribe lets you register a callback, that is hit anytime an action is dispatched,
//so that you can update the UI of your application to reflect the current application state
store.subscribe(render);

//Initially render
render();




// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )