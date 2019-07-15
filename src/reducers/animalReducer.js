import {UPDATE_ANIMAL} from '../actions/animalActions';

const animalReducer = (state = {}, {type,payload}) => {
    switch (type) {
        case UPDATE_ANIMAL:
            return {name: payload}
        default:
            return state;
    }
};

export default animalReducer;