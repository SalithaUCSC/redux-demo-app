const animalReducer = (state = {}, {type,payload}) => {
    if(type === "UPDATE_ANIMAL") {
        return {
            name: payload
        }
    }
    return state;
};

export default animalReducer;