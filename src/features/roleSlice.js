import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allRolesValues: "",
  getIdData: "",
  getRoleIdValue: "",
  responseOkMessage: null,
  responseErrorMessage: null,
  updateRespOk: false,
  updateRespError: false,
};

export const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    allRoles: (state, action) => {
      state.allRolesValues = action.payload;
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
    getRoleById: (state, action) => {
      state.getRoleIdValue = action.payload;
    },
  },
});

export const {
  allRoles,
  getByIdData,
  responseOkFunc,
  responseErrorFunc,
  updateOkFunc,
  updateErrorFunc,
  getRoleById,
} = roleSlice.actions;
export default roleSlice.reducer;
