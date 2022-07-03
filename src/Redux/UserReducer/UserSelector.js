import { createSelector } from "reselect";
const UserSelect = (state) => state.User;
export const Current_UserSelector = createSelector(
  UserSelect,
  (User) => User.current_user
);
