import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allDeptValue: "",
  getIdData: "",
  responseOkMessageD: null,
  responseErrorMessageD: null,
  updateRespOkD: "false",
  departmentArray: [],
  departCompanyData: "",
  updateRespErrorD: false,
  addSelectedUserValue: [],
  addSelectedUserInTableValue: [],
};

export const departmentSlice = createSlice({
  name: "dept",
  initialState,
  reducers: {
    allDepartments: (state, action) => {
      state.allDeptValue = action.payload;
    },
    updateOkFuncD: (state, action) => {
      state.updateRespOkD = action.payload;
    },
    updateErrorFuncD: (state, action) => {
      state.updateRespErrorD = action.payload;
    },
    responseOkFuncD: (state, action) => {
      state.responseOkMessageD = action.payload;
    },
    responseErrorFuncD: (state, action) => {
      state.responseErrorMessageD = action.payload;
    },
    getByIdData: (state, action) => {
      state.getIdData = action.payload;
    },
    getDepartmentCompanyData: (state, action) => {
      state.departCompanyData = action.payload;
    },
    getDepartmentArray: (state, action) => {
      state.departmentArray = [...state.departmentArray, action.payload];
    },
    addSelectedUserInTable: (state, action) => {
      state.addSelectedUserInTableValue = action.payload;
    },
    addSelectedUser: (state, action) => {
      state.addSelectedUserValue = [
        ...state.addSelectedUserValue,
        action.payload,
      ];
      console.log(typeof state.addSelectedUserValue);
    },
    removeSelectedUser: (state, action) => {
      console.log(action.payload.id);

      state.addSelectedUserValue = [...state.addSelectedUserValue];
      state.addSelectedUserInTableValue = [
        ...state.addSelectedUserInTableValue,
      ];
      state.addSelectedUserValue.splice(
        state.addSelectedUserValue.findIndex(
          (user) => user.id === action.payload.id
        ),
        1
      );
      state.addSelectedUserInTableValue.splice(
        state.addSelectedUserInTableValue.findIndex(
          (user) => user.id === action.payload.id
        ),
        1
      );
    },
  },
});

export const {
  allDepartments,
  getByIdData,
  responseOkFuncD,
  addSelectedUserInTable,
  responseErrorFuncD,
  updateOkFuncD,
  updateErrorFuncD,
  getDepartmentArray,
  getDepartmentCompanyData,
  addSelectedUser,
  removeSelectedUser,
} = departmentSlice.actions;
export default departmentSlice.reducer;
