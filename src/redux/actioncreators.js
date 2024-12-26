import { ADD_SHOPPING, DELETE_SHOPPING } from "./action";

const addSopping = (data) => {
  return {
    type: ADD_SHOPPING,
    payload: data,
  };
};

const deleteSopping = (data) => {
  return {
    type: DELETE_SHOPPING,
    payload: data,
  };
};
export { addSopping,deleteSopping };
