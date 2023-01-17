import SignInSide from "./components/Layout/SignInSide";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import RoleManagement from "./components/Pages/RoleManagement";
import HomeElement from "./components/Pages/HomeElement";
import { ThemeProvider } from "@mui/system";
import { themeOptions } from "./Theme";
import MenuManagement from "./components/Pages/MenuManagement";
import DesignationMaster from "./components/Pages/DesignationMaster";
import DepartmentMaster from "./components/Pages/DepartmentMaster";
import UserManagament from "./components/Pages/UserManagament";
import FormsMgmt from "./components/Pages/FormsMgmt";
import Submissions from "./components/Pages/Submissions";
import PasswordPolicy from "./components/Pages/PasswordPolicy";
import FormMaker from "./components/Form/FormMaker";
import SubmitForm from "./components/Pages/SubmitForm";
import Form from "./components/Pages/Form";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themeOptions}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<SignInSide />} />
            <Route exact path="/home" element={<MainLayout />}>
              <Route index element={<HomeElement />} />
              <Route
                path="role-management"
                element={<RoleManagement />}
              ></Route>
              <Route
                path="menu-management"
                element={<MenuManagement />}
              ></Route>
              <Route
                path="designation-master"
                element={<DesignationMaster />}
              ></Route>
              <Route
                path="department-master"
                element={<DepartmentMaster />}
              ></Route>
              <Route
                path="user-management"
                element={<UserManagament />}
              ></Route>
              <Route path="forms-management" element={<FormsMgmt />}></Route>
              <Route path="submissions">
                <Route index element={<Submissions />}></Route>
                <Route path="form-submit" element={<SubmitForm />}></Route>
              </Route>
              <Route
                path="password-policy"
                element={<PasswordPolicy />}
              ></Route>
              <Route path="forms">
                <Route index element={<Form />}></Route>
                <Route path="form-maker" element={<FormMaker />}></Route>
              </Route>
              <Route path="form-maker" element={<FormMaker />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
