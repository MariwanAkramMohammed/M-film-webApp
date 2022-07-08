import { createSelector } from "reselect";
const All_Data = (state) => state.Data;

export const CollectionSelect = createSelector(All_Data, (Data) =>
  Data.Data_Db
    ? Object.keys(Data.Data_Db).map((index) => Data.Data_Db[index])
    : []
);

export const DataSelect = createSelector(All_Data, (Data) =>
  Data.Data_Db ? Data.Data_Db : {}
);
export const CollectionDataSelector = (paramId) =>
  createSelector(All_Data, (Data) =>
    Data.Data_Db ? Data.Data_Db[paramId] : {}
  );

export const ListSelector = createSelector(All_Data, (Data) =>
  Data.Data_Show ? Object.keys(Data.Data_Show) : []
);
