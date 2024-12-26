import { ADD_SHOPPING ,DELETE_SHOPPING } from "./action";
const initialState = {
  shopping: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOPPING:
      return { ...state, shopping: [...state.shopping, action.payload] };
    case DELETE_SHOPPING:
        return {...state,shopping:state.shopping.filter((item,index)=>index !==action.payload)}
    default:
      return state;
  }
};

export default reducer;