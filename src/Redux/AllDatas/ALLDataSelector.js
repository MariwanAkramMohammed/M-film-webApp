import { createSelector } from "reselect";
const All_Data = (state) => state.Data;
export const CollectionSelect = createSelector(All_Data, (Data) =>
  Object.keys(Data.Data_Show).map((index) => Data.Data_Show[index])
);
export const MoveisSelect = createSelector(
  All_Data,
  (Data) => Data.Data_Show.movies
);
export const CollectionDataSelector = (paramId) =>
  createSelector(All_Data, (Data) => Data.Data_Show[paramId]);
