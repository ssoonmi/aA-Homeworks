import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { applyMiddleware } from 'redux';

const addLoggingToDispatch = store => next => action => {
  const oldState = store.getState();
  console.log(oldState);
  console.log(next);
  next(action);
  console.log(store.getState());
};

const addLoggingToDispatch2 = store => next => action => {
  const oldState = store.getState();
  console.log(oldState);
  console.log(next);
  next(action);
  console.log(store.getState());
};

const addLoggingNextToDispatch = store => next => action => {
  const oldState = store.getState();
  console.log(oldState);
  console.log(next);
  next(action);
  console.log(store.getState());
}

// const applyMiddlewares = (store, middlewares) => {
//   let dispatch = store.dispatch;
//   middlewares.forEach( middleware => {
//     dispatch = middleware(store)(dispatch);
//   });
//   return Object.assign({}, store, {dispatch});
// };


const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(addLoggingToDispatch, addLoggingNextToDispatch, addLoggingToDispatch2)
  );
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;
