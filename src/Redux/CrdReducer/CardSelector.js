import { createSelector } from "reselect";
const CardData = (state) => state.Card;
export const CardSelector = createSelector(CardData, (Card) => Card.hidden);
