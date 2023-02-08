import WithNav from "./Components/UserDashBoard/pages/WithNav";
import WithoutNav from "./Components/UserDashBoard/pages/WithoutNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { createContext, useReducer, useContext } from "react";
import Login from "./Components/Login/Login";
import Login2 from "./Components/Login2/Login2";
import PasswordChange from "./Components/PasswordChange/PasswordChange";
import NavigationPanel from "./Components/NavigationPanel/NavigationPanel";
import Navbar from "./Components/UserDashBoard/Navbar";
import FirstModal from "./Components/UserDashBoard/pages/FirstModal";
import NameResponse from "./Components/UserDashBoard/NameResponse";
import PasswordChangeMain from "./Components/Modules/PasswordChangeModule/PasswordChangeMain";
import AlertMain from "./Components/Modules/AlertModule/AlertMain";
import CreateDepartment from "./Components/Modules/DepartmentModule/Components/CreateDepartment";
import InternetConnectionMain from "./Components/Modules/InternetConnection/InternetConnection";
import LogMain from "./Components/Modules/LogModule/LogMain";
import DepartmentsMain from "./Components/Modules/DepartmentModule/DepartmentsMain";
import Settings from "./Components/Modules/SettingsModule/SettingsMain";
import ImagesMain from "./Components/Modules/ImagesModule/ImagesMain";
import ReportsMain from "./Components/Modules/ReportModule/ReportsMain";
import CreateReport from "./Components/Modules/ReportModule/Components/CreateReport";
import UpdateReport from "./Components/Modules/ReportModule/Components/UpdateReport";
import CaseMain from "./Components/Modules/CaseModule/CaseMain";
import update from "immutability-helper";
import CreateCase from "./Components/Modules/CaseModule/Components/CreateCase";
import SwitchSearch from "./Components/Modules/SwitchModule/Components/SwitchSearch";
import SegmentMain from "./Components/Modules/SegmentModule/SegmentMain";
import UpdateSwitch from "./Components/Modules/SwitchModule/Components/UpdateSwitch";
import CreateRolesDeCaso from "./Components/Modules/RolesDeCaso/Components/CreateRolesDeCaso";
import ExtractPhoneMain from "./Components/Modules/ExtractPhoneModule/ExtractPhoneMain";
import LoadPhoneStatement from "./Components/Modules/ExtractPhoneModule/Components/LoadPhoneStatement";
import FollowView from "./Components/Modules/SegmentModule/Components/FollowView";
import FollowUpdate from "./Components/Modules/SegmentModule/Components/FollowUpdate";
import UserMain from "./Components/Modules/UserModule/UserMain";
import AddUser from "./Components/Modules/UserModule/Components/AddUser";
import UpdateUser from "./Components/Modules/UserModule/Components/UpdateUser";
import CreateSegment from "./Components/Modules/SegmentModule/Components/CreateSegment";
import SwitchMain from "./Components/Modules/SwitchModule/SwitchMain";
import RolesDeCasoMain from "./Components/Modules/RolesDeCaso/RolesDeCasoMain";
import UpdateDepartment from "./Components/Modules/DepartmentModule/Components/UpdateDepartment";
import TemplateMain from "./Components/Modules/TemplateModule/TemplateMain";
import CreateTemplate from "./Components/Modules/TemplateModule/Components/CreateTemplate";
import CopyTemplate from "./Components/Modules/TemplateModule/Components/CopyTemplate";
import RoleManagementMain from "./Components/Modules/RoleManagementModule/RoleManagementMain";
export const AppContext = createContext();

const initialState = {
  inputText: "",
  inputMargin: "",
  sidebar: "false",
  check: "false",
};
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_INPUT":
      return update(state, { inputText: { $set: action.data } });
    case "UPDATE_MARGIN":
      return update(state, { inputMargin: { $set: action.data } });
    case "UPDATE_SIDEBAR":
      return update(state, { sidebar: { $set: action.data } });
    case "UPDATE_CHECK":
      return update(state, { check: { $set: action.data } });
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const { val1 } = useContext(AppContext)

  return (
    <div className="container-fluid mx-0 px-0">
      <AppContext.Provider
        value={{
          val1: { state, dispatch },
        }}>
        <Router>
          <Routes className="row">
            <Route element={<WithNav />} className="col-12">
              <Route exact path="/users" element={<UserMain />} />
              <Route exact path="/" element={<UserMain />} />
              {/* <Route path='/users' element={<Users />} /> */}
              {/* <Route path='/users' element={<AddUser />} /> */}
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/update-user/:id" element={<UpdateUser />} />
              {/* <Route path='/userDetail' element={<UserDetail />} /> */}
              <Route path="/fmodal" element={<FirstModal />} />
              <Route path="/nameResponse" element={<NameResponse />} />
              <Route path="/passwordChange" element={<PasswordChangeMain />} />
              <Route path="/role-management" element={<RoleManagementMain />} />
              <Route path="/alerts" element={<AlertMain />} />
              <Route path="/departments" element={<DepartmentsMain />} />
              <Route path="/create-department" element={<CreateDepartment />} />
              <Route
                path="/internetConnection"
                element={<InternetConnectionMain />}
              />
              <Route path="/log" element={<LogMain />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/update-dept/:id" element={<UpdateDepartment />} />
              <Route path="/images" element={<ImagesMain />} />
              <Route path="/report" element={<ReportsMain />} />
              <Route path="/create-report" element={<CreateReport />} />
              <Route path="/update-report" element={<UpdateReport />} />
              <Route path="/case-main-owner" element={<CaseMain />} />
              <Route path="/switch" element={<SwitchMain />} />
              <Route path="/switch-searches" element={<SwitchSearch />} />
              <Route path="/follow-owner" element={<SegmentMain />} />
              <Route path="/follow-create" element={<CreateSegment />} />
              <Route path="/follow-view" element={<FollowView />} />
              <Route path="/follow-update" element={<FollowUpdate />} />
              <Route path="/data-in-load-update" element={<UpdateSwitch />} />
              <Route path="/roles-caso-main" element={<RolesDeCasoMain />} />
              <Route path="/data-in-main-all" element={<ExtractPhoneMain />} />
              <Route
                path="/roles-caso-create"
                element={<CreateRolesDeCaso />}
              />
              <Route
                path="/data-in-load-sabanas"
                element={<LoadPhoneStatement />}
              />
              <Route path="/casos-de-uso" element={<TemplateMain />} />
              <Route path="/casos-de-uso-create" element={<CreateTemplate />} />
              <Route path="/casos-de-uso-copy" element={<CopyTemplate />} />
              <Route path="/create-case" element={<CreateCase />} />
            </Route>
          </Routes>

          <Routes>
            <Route element={<WithoutNav />}>
              <Route path="/navigation" element={<NavigationPanel />} />
              <Route path="/pwd-Change" element={<PasswordChange />} />
              <Route path="/log-in-username" element={<Login />} />
              <Route path="/log-in-password-and-token" element={<Login2 />} />
            </Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;

//  640 × 480, 800 × 600, 1024 × 768,1280 × 800 1366 × 768,1400 × 900 1680 × 1050)
