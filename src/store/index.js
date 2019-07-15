import {createStore, combineReducers} from 'redux';
import personReducer from '../reducers/personReducer';
import animalReducer from '../reducers/animalReducer';

const AllReducers = combineReducers({animal: animalReducer, person: personReducer});

const InitialState = {
    animal: { name: "dog" },
    person: { name: "techpool" }
}
const store = createStore(AllReducers, InitialState);

export default store;