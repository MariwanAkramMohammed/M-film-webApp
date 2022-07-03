import { CardTypeAction } from "./CardActionType";
const Initial_state = {
  hidden: false,
};
const CardReducer = (state = Initial_state, action) => {
  switch (action.type) {
    case CardTypeAction.Card_Hidden:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};
export default CardReducer;
