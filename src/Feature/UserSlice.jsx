import { createSlice } from "@reduxjs/toolkit";
import data from "../Data/data.json";

export const UserSlice = createSlice({
  name: "music",
  initialState: {
    user: data,
    sel_id: [],
    sear: [],
    lang: "Select Language",
    loading: false,
    error: false,
  },
  reducers: {
    selectId: (state, action) => {
      state.sel_id = state.user.filter((val) => {
        return val.id === action.payload;
      });
    },

    search: (state, action) => {
      state.sear = action.payload;
    },

    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { selectId, search, setLang } = UserSlice.actions;
export default UserSlice.reducer;
