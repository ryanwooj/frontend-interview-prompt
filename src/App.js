import React, { useState } from 'react';

import Dashboard from './components/Dashboard';
import faker from 'faker';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Input from '@material-ui/core/Input';
import Link from '@material-ui/core/Link';

import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#3F51D9',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  avatar: {
    margin: 10
  },
  input: {
    color: 'white',
    marginLeft: theme.spacing(1)
  },
  list: {
    color: 'white',
    opacity: '0.7'
  },
  drawerPad: {
    backgroundColor: '#232323',
    height: '100vh'
  }
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const [bgColor, setColor] = useState({
    backgroundColor: '#232323',
    color: 'white',
    opacity: '0.7'
  });

  function handleColor() {
    setColor({
      backgroundColor: 'white',
      color: 'black',
      opacity: '0.7'
    });
  }

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function checkWidth() {
    window.innerWidth < 1200 && handleDrawerClose();
  }

  window.addEventListener('resize', function(event) {
    checkWidth();
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}>
        <Toolbar>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'>
            <Grid item>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'>
                <Grid item>
                  <IconButton
                    color='inherit'
                    aria-label='open drawer'
                    onClick={handleDrawerOpen}
                    edge='start'
                    className={clsx(classes.menuButton, {
                      [classes.hide]: open
                    })}>
                    <Icon>menu</Icon>{' '}
                  </IconButton>
                </Grid>
                <Grid item>
                  <Icon fontSize='large'>search</Icon>
                </Grid>
                <Grid item>
                  <Input
                    placeholder='Search...'
                    className={classes.input}
                    inputProps={{
                      'aria-label': 'search'
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction='row'>
                <Grid item>
                  <Grid container justify='center' alignItems='center'>
                    <Avatar
                      alt='Remy Sharp'
                      src={faker.image.people()}
                      className={classes.bigAvatar}
                    />
                  </Grid>
                </Grid>
                <Grid item>
                  {' '}
                  <Button
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup='true'
                    onClick={handleClick}>
                    <Icon>keyboard_arrow_down</Icon>
                  </Button>
                  <Menu
                    id='simple-menu'
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem onClick={handleClose}>My Calendar</MenuItem>
                    <MenuItem onClick={handleClose}>Documentation</MenuItem>
                    <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}>
        <div className={classes.drawerPad}>
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <Icon>chevron_right</Icon>
              ) : (
                <Icon>chevron_left</Icon>
              )}
            </IconButton>
          </div>
          <Divider />
          <List className={classes.list}>
            <ListItem button key='Calendar' style={bgColor}>
              <ListItemIcon>
                <Icon className={classes.list}>date_range</Icon>
              </ListItemIcon>
              <ListItemText primary='Calendar' />
            </ListItem>
            <ListItem button key='Documentation' style={bgColor}>
              <ListItemIcon>
                <Icon className={classes.list}>home</Icon>
              </ListItemIcon>
              <ListItemText primary='Documentation' />
            </ListItem>
            <ListItem
              button
              key='Dashboard'
              style={{
                backgroundColor: 'white',
                color: 'black'
              }}>
              <ListItemIcon>
                <Icon
                  className={classes.list}
                  style={{ color: 'black', opacity: '0.7' }}>
                  description
                </Icon>
              </ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItem>
          </List>
          <Divider />
          <List className={classes.list}>
            {[
              'AdminPlugins',
              'Admin Forms',
              'Admin Layouts',
              'Information Panels',
              'Ecommerce',
              'UI Elements',
              'Form Elements',
              'Plugins',
              'Pages'
            ].map((text, index) => (
              <ListItem
                button
                component={Link}
                to={`/${index}`}
                key={text}
                onClick={handleColor}>
                <ListItemIcon>
                  {index === 0 ? (
                    <Icon className={classes.list}>whatshot</Icon>
                  ) : index === 1 ? (
                    <Icon className={classes.list} variant='outlined'>
                      checkbox
                    </Icon>
                  ) : index === 2 ? (
                    <Icon className={classes.list}>palette</Icon>
                  ) : index === 3 ? (
                    <Icon className={classes.list}>equalizer</Icon>
                  ) : index === 4 ? (
                    <Icon className={classes.list}>local_mall</Icon>
                  ) : index === 5 ? (
                    <Icon className={classes.list}>wb_incandescent</Icon>
                  ) : index === 6 ? (
                    <Icon className={classes.list}>dehaze</Icon>
                  ) : index === 7 ? (
                    <Icon className={classes.list}>settings</Icon>
                  ) : (
                    <Icon className={classes.list}>library_books</Icon>
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List className={classes.list}>
            {[
              'Executive Meeting',
              'HelpDesk Redesign',
              'Sonyy Board Meeting'
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index === 0 ? (
                    <Icon style={{ color: 'yellow' }}>fiber_smart_record</Icon>
                  ) : index === 1 ? (
                    <Icon style={{ color: 'red' }}>fiber_smart_record</Icon>
                  ) : (
                    <Icon style={{ color: 'purple' }}>fiber_smart_record</Icon>
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Dashboard />
      </main>
    </div>
  );
}
