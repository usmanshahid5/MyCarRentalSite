import * as React from 'react';
import AppBar     from '@mui/material/AppBar';
import Box        from '@mui/material/Box';
import Toolbar    from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu       from '@mui/material/Menu';
import MenuIcon   from '@mui/icons-material/Menu';
import Container  from '@mui/material/Container';
import Avatar     from '@mui/material/Avatar';
import Button     from '@mui/material/Button';
import Tooltip    from '@mui/material/Tooltip';
import MenuItem   from '@mui/material/MenuItem';
import SignIn     from '../SignIn/SignIn';
import img1       from "../Images/cardImages/23.jpg"
import { NavLink } from 'react-router-dom';

const pages = ['About us'];
const settings = ['Profile', 'SignIn', 'SignUp'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const mySignIn = () => {
    return SignIn()
  }

  return (

    <AppBar style={ { zIndex: "2", backgroundColor: "white", position: "fixed", height:"60px" } }>
      <Container maxWidth="xl" style={{marginTop:"-4px"}}>
        <Toolbar disableGutters>
          <div className='logoimg' sx={ { display: { xs: 'none', md: 'flex' }, mr: 1 } }/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={ {
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Poppins',
              fontWeight: 500,
              color: 'black',
              textDecoration: 'none',
            } }
          >
            ExtraVagantForeigns
          </Typography>

          <Box sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={ handleOpenNavMenu }
              sx={{color:"black"}}
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={ anchorElNav }
              anchorOrigin={ {
                vertical: 'bottom',
                horizontal: 'left',
              } }
              keepMounted
              transformOrigin={ {
                vertical: 'top',
                horizontal: 'left',
              } }
              open={ Boolean(anchorElNav) }
              onClose={ handleCloseNavMenu }
              sx={ {
                display: { xs: 'block', md: 'none' },
              } }
            >

                <MenuItem onClick={ handleCloseNavMenu }>

                    <Typography textAlign="center" style={{color:"white"}}>
                      <NavLink
                      to= '/aboutus'
                      style={{color:"black"}}

                    >about us</NavLink></Typography>
                </MenuItem>

            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */ }
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={ {
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Poppins',
              fontWeight: 500,

              color: 'inherit',
              textDecoration: 'none',
            } }
          >
            ExtraVagantForeigns
          </Typography>
          <Box sx={ { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>

              <Button
                onClick={ handleCloseNavMenu }
                sx={ { my: 2, color: 'black', display: 'block' } }
              > <NavLink
                to= '/aboutus'
                style={{color:"black"}}
              >
                about us</NavLink>
              </Button>

          </Box>

          <Box sx={ { flexGrow: 0 } }>
            <Box>
            <Menu>
            <MenuItem onClick={ handleCloseNavMenu }>

              <Typography textAlign="center" style={{color:"white"}}>
                <NavLink
                  to= '/aboutus'
                  style={{color:"black"}}

                >about us</NavLink></Typography>
            </MenuItem>

          </Menu>
        </Box>
            <Tooltip title="Open settings">

              <IconButton onClick={ handleOpenUserMenu } sx={ { p: 0, borderColor:"#A48111" } }>
                <Avatar alt="Remy Sharp" src={ img1 } />
              </IconButton>
            </Tooltip>
            <Menu
              sx={ { mt: '45px' } }
              id="menu-appbar"
              anchorEl={ anchorElUser }
              anchorOrigin={ {
                vertical: 'top',
                horizontal: 'right',
              } }
              keepMounted
              transformOrigin={ {
                vertical: 'top',
                horizontal: 'right',
              } }
              open={ Boolean(anchorElUser) }
              onClose={ handleCloseUserMenu }
            >
              { settings.map((setting) => (
                <MenuItem key={ setting } onClick={ handleCloseUserMenu }>
                  <NavLink
                    to={ `/${ setting}` }
                    style={{color:"black"}}
                  >
                  <Typography textAlign="center">{ setting }</Typography></NavLink>
                </MenuItem>
              )) }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  );
};
export default ResponsiveAppBar;
