import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import ZoomOutTwoToneIcon from "@mui/icons-material/ZoomOutTwoTone";
import ZoomOutMapTwoToneIcon from "@mui/icons-material/ZoomOutMapTwoTone";
import DynamicFormTwoToneIcon from "@mui/icons-material/DynamicFormTwoTone";
import SupervisorAccount from "@mui/icons-material/SupervisorAccount";
import LockPerson from "@mui/icons-material/LockPerson";
import AddModerator from "@mui/icons-material/AddModerator";
import Category from "@mui/icons-material/Category";
import ManageAccounts from "@mui/icons-material/ManageAccounts";
import StorageIcon from "@mui/icons-material/Storage";
import KeyIcon from "@mui/icons-material/Key";

export const SideBarData = [
  {
    title: "Dashboard",
    path: "/home",
    icon: <DashboardTwoToneIcon />,
    key: 1,
  },
  {
    title: "Role Management",
    path: "/home/role-management",
    icon: <SupervisorAccount />,
    key: 2,
  },
  {
    title: "Menu Management",
    path: "/home/menu-management",
    icon: <LockPerson />,
    key: 3,
  },
  {
    title: "Designation Master",
    path: "/home/designation-master",
    icon: <AddModerator />,
    key: 4,
  },
  {
    title: "Department Master",
    path: "/home/department-master",
    icon: <Category />,
    key: 5,
  },
  {
    title: "User Management",
    path: "/home/user-management",
    icon: <ManageAccounts />,
    key: 6,
  },
  {
    title: "Forms Management",
    path: "/home/forms-management",
    icon: <DynamicFormTwoToneIcon />,
    key: 7,
  },
  {
    title: "Submission",
    path: "/home/submissions",
    icon: <StorageIcon />,
    key: 8,
  },
  {
    title: "Password Policy",
    path: "/home/password-policy",
    icon: <KeyIcon />,
    key: 9,
  },
  {
    title: "Form Maker",
    path: "/home/forms",
    icon: <DynamicFormTwoToneIcon />,
    key: 10,
  },
];
