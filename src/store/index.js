import {createStore, combineReducers} from 'redux';
import personReducer from '../reducers/personReducer';
import animalReducer from '../reducers/animalReducer';

const AllReducers = combineReducers({animal: animalReducer, person: personReducer});

const InitialState = {
    animal: { name: "dog" },
    person: { name: "salitha" }
}
const store = createStore(AllReducers, InitialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;