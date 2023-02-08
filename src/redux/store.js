import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import deptReducer from "../features/departmentSlice";
import caseReducer from "../features/caseSlice";
import roleReducer from "../features/roleSlice";
import statusReducer from "../features/statusSlice";
import loginReducer from "../features/loginSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    dept: deptReducer,
    case: caseReducer,
    role: roleReducer,
    status: statusReducer,
    login: loginReducer,
  },
});
