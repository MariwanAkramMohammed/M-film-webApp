import { CardTypeAction } from "./CardActionType";
export const ShowCardAction = () => ({
  type: CardTypeAction.Card_Hidden,
});
export const ShowProCardAction = () => ({
  type: CardTypeAction.Card_Pro_Hidden,
});
export const AddFilmToListAction = (item) => ({
  type: CardTypeAction.Add_Film_To_List,
  payload: item,
});
