import { CardTypeAction } from "./CardActionType";
export const ShowCardAction = () => ({
  type: CardTypeAction.Card_Hidden,
});
export const ShowProCardAction=()=>({
  type:CardTypeAction.Card_Pro_Hidden,
})