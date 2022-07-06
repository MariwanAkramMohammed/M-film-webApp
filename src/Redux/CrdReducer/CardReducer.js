import { CardTypeAction } from "./CardActionType";
const Initial_state = {
  hidden: false,
  ProShow: false,
};
const CardReducer = (state = Initial_state, action) => {
  switch (action.type) {
    case CardTypeAction.Card_Hidden:
      return { ...state, hidden: !state.hidden };
    case CardTypeAction.Card_Pro_Hidden:
      return { ...state, ProShow: !state.ProShow };

    default:
      return state;
  }
};
export default CardReducer;
