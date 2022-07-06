import { createSelector } from "reselect";
const CardData = (state) => state.Card;
export const CardSelector = createSelector(CardData, (Card) => Card.hidden);
export const ProShowSelector = createSelector(CardData, (Card) => Card.ProShow);
