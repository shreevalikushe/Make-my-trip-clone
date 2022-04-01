import React from "react";

import styleH from "./HeaderP.module.css";
import { FiChevronRight } from "react-icons/fi";
import mapimg from "../images/mapimg.jpg";

//  menu type
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// end

import { BiSearch } from "react-icons/bi";
import SortButton from "./SortButton";

const HeaderP = () => {
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 150,
      minHeight: 120,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 15,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  // first droup down menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={styleH.container}>
        <div className={styleH.small_container}>
          {/* top */}

          <div className={styleH.topdiv}>
            <p>
              {" "}
              <span>Home</span> <FiChevronRight className={styleH.gretericon} />{" "}
              Hotels and more{" "}
            </p>
          </div>

          <div className={styleH.titleMapDiv}>
            <p>Hotels, Villas, Apartments and more</p>

            <img src={mapimg} alt="not found" className={styleH.map_img} />
          </div>

          <div className={styleH.searchDiv}>
            <div className={styleH.leftdiv}>
              <div className={styleH.leftdiv_type}>
                <div>
                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Select Trip Type
                  </Button>
                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem
                      onClick={handleClose}
                      disableRipple
                      sx={{ m: -1 }}
                    >
                      Business
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem
                      onClick={handleClose}
                      disableRipple
                      sx={{ m: -1 }}
                    >
                      Family
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem
                      onClick={handleClose}
                      disableRipple
                      sx={{ m: -1 }}
                    >
                      Romantic
                    </MenuItem>
                  </StyledMenu>
                </div>
              </div>

              {/* sendon droup dwon menu  */}
              <div className={styleH.leftdiv_popularity}>
                <p style={{ fontWeight: "bold" }}>| Sort By:</p>
                {/* droup down menu  */}

                <SortButton />
              </div>

              <p style={{ color: "#4A4A4A", fontSize: "14px" }}>
                See exotic properties
              </p>
            </div>

            {/* Rigght id */}
            <div className={styleH.rightdiv}>
              <div className={styleH.find_location_div}>
                <BiSearch />
                <input type="text" placeholder="Search Location or Property" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderP;
