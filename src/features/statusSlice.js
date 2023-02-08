import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allStatusValues: "",
  getIdData: "",
  responseOkMessage: null,
  responseErrorMessage: null,
  updateRespOk: false,
  updateRespError: false,
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    allStatuses: (state, action) => {
      state.allStatusValues = action.payload;
    },
    updateOkFunc: (state, action) => {
      state.updateRespOk = action.payload;
    },
    updateErrorFunc: (state, action) => {
      state.updateRespError = action.payload;
    },
    responseOkFunc: (state, action) => {
      state.responseOkMessage= action.payload;
    },
    responseErrorFunc: (state, action) => {
      state.responseErrorMessage = action.payload;
    },
    getByIdData: (state, action) => {
      state.getIdData = action.payload;
    },
  },
});

export const {
  allStatuses,
  getByIdData,
  responseOkFunc,
  responseErrorFunc,
  updateOkFunc,
  updateErrorFunc,
} = statusSlice.actions;
export default statusSlice.reducer;
