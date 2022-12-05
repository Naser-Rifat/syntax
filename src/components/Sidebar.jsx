import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import { MdDashboard, MdOutlineCancel } from "react-icons/md";
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
    "flex  items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-neutral  text-md m-2";

  const normalLink =
    "flex  items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

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
            <Typography variant="h6" className="dark:text-neutral">
              Digital Menu_Card
            </Typography>
          </Box>
          <button
            type="button"
            onClick={() => setActiveMenu(!activeMenu)}
            style={{ color: currentColor }}
            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block lg:hidden "
          >
            <MdOutlineCancel />
          </button>
        </Box>
        <div className="mt-5">
          <NavLink
            to=""
            onClick={handleCloseSidebar}
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#0000" : "",
            })}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <MdDashboard />
            <span className="capitalize ">dashboard</span>
          </NavLink>
        </div>
      </Fragment>
    </Box>
  );
};

export default Sidebar;
