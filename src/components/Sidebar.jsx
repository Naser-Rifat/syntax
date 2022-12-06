import { Dashboard } from "@mui/icons-material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../Contexts/ContextProvider";
const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex  items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-gray-50  text-md m-2";

  const normalLink =
    "flex  items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-neutral   m-2";

  return (
    <Box className="h-screen lg:overflow-hidden overflow-auto lg:hover:overflow-auto pb-10 bg-white dark:bg-main-dark-bg">
      <Fragment>
        <Box className="flex justify-between items-center">
          <Box
            to="/"
            onClick={handleCloseSidebar}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              px: 1,
              mt: 2,
            }}
          >
            <Box
              component="img"
              src={""}
              sx={{
                width: "40px",
              }}
            />
            <Typography variant="h6" className="text-neutral">
              dsfdsf
            </Typography>
          </Box>
          <button
            type="button"
            onClick={() => setActiveMenu(!activeMenu)}
            // style={{ color: currentColor }}
            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block lg:hidden "
          >
            <CloseOutlinedIcon />
          </button>
        </Box>
        <div className="mt-5">
          <NavLink
            to=""
            onClick={handleCloseSidebar}
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#000" : "#000",
            })}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <Dashboard />
            <span className="capitalize text-gray-50">Add services</span>
          </NavLink>
        </div>
      </Fragment>
    </Box>
  );
};

export default Sidebar;
