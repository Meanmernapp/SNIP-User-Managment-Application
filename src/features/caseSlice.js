import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCaseValues: "",
  getIdData: "",
  responseOkMessage: null,
  responseErrorMessage: null,
  updateRespOk: false,
  updateRespError: false,
};

export const caseSlice = createSlice({
  name: "case",
  initialState,
  reducers: {
    allCases: (state, action) => {
      state.allCaseValues = action.payload;
    },
    updateOkFunc: (state, action) => {
      state.updateRespOk = action.payload;
    },
    updateErrorFunc: (state, action) => {
      state.updateRespError = action.payload;
    },
    responseOkFunc: (state, action) => {
      state.responseOkMessage = action.payload;
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
  allCases,
  getByIdData,
  responseOkFunc,
  responseErrorFunc,
  updateOkFunc,
  updateErrorFunc,
} = caseSlice.actions;
export default caseSlice.reducer;
