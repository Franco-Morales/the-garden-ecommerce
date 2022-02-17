const categoryState = { categories: [] };


const categoryReducer = (state, action) => {
    switch (action.type) {
        case "ADD_CATEGORIES": {
            return { ...state, categories: [ ...action.payload ] }
        }
        default:
            return state;
    }
}


export { categoryState };
export default categoryReducer;