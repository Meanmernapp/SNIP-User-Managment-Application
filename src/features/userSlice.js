import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userValue: "",
  userIdData: "",
  user: "",
  getIdData: "",
  responseOkMessage: null,
  responseErrorMessage: null,
  updateRespOk: false,
  updateRespError: false,
  responseId: null,
  passResetId: "",
  getPassIdData: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    allUsers: (state, action) => {
      state.userValue = action.payload;
    },

    singleUser: (state, action) => {
      state.user = action.payload;
    },
    updateOkFunc: (state, action) => {
      state.updateRespOk = action.payload;
    },
    fetchResponseID: (state, action) => {
      state.responseId = action.payload;
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
    getByUserIdData: (state, action) => {
      state.userIdData = action.payload;
    },
    getPassResetId: (state, action) => {
      state.passResetId = action.payload;
    },
    getPassIdData: (state, action) => {
      state.passIdData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  allUsers,
  getByUserIdData,
  singleUser,
  getByIdData,
  responseOkFunc,
  responseErrorFunc,
  updateOkFunc,
  updateErrorFunc,
  fetchResponseID,
  getPassResetId,
  getPassIdData,
} = userSlice.actions;

export default userSlice.reducer;
