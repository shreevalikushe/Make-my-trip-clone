import React from 'react'

import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import styleH from "./HeaderP.module.css"

const SortButton = () => {

    const StyledMenu = styled((props) => (
        <Menu
          elevation={0}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          {...props}
        />
      ))(({ theme }) => ({
        '& .MuiPaper-root': {
          borderRadius: 6,
          marginTop: theme.spacing(1),
          minWidth: 150,
          minHeight:120,
          color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
          boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
          '& .MuiMenu-list': {
            padding: '4px 0',
          },
          '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
              fontSize: 15,
              color: theme.palette.text.secondary,
              marginRight: theme.spacing(1.5),
            },
            '&:active': {
              backgroundColor: alpha(
                theme.palette.primary.main,
                theme.palette.action.selectedOpacity,
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

<div>
      <Button
        // id="demo-customized-button"
        // aria-controls={open ? 'demo-customized-menu' : undefined}
        // aria-haspopup="true"
        // aria-expanded={open ? 'true' : undefined}
        // variant="contained"
        // disableElevation
        sx={{
         fontWeight:"bold",
         fontSize:14,  
        }}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Popularity
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple sx={{m:-1,fontWeight:"bold",fontSize:"14px"}} className={styleH.inside_Droup_down_hover} >
        Popularity
        </MenuItem>
      
        <MenuItem onClick={handleClose} disableRipple sx={{m:-1,fontWeight:"bold",fontSize:"14px"}} className={styleH.inside_Droup_down_hover} >
         
        Price - Low to High
        </MenuItem>
      
        <MenuItem onClick={handleClose} disableRipple sx={{m:-1,fontWeight:"bold",fontSize:"14px"}} className={styleH.inside_Droup_down_hover}>
          Price - High to Low
        </MenuItem>

        <MenuItem onClick={handleClose} disableRipple  sx={{m:-1,fontWeight:"bold",fontSize:"14px"}} className={styleH.inside_Droup_down_hover}>
         User Rating - High to Low
        </MenuItem>
        
      </StyledMenu>
                 </div>


    </>
  )
}

export default SortButton