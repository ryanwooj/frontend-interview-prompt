import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Popover from '@material-ui/core/Popover';
import img1 from '../images/image1.png';
import img2 from '../images/image2.png';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(8)
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(4)
  },
  lastWeekText: {
    marginLeft: theme.spacing(1)
  },
  numberGrid: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(6)
  },
  secondView: {
    marginTop: theme.spacing(5)
  },
  newButton: {
    color: 'white',
    backgroundColor: 'lightGreen'
  },
  returnButton: {
    color: '#e0e0e0',
    marginLeft: theme.spacing(1)
  },
  popover: {
    margin: theme.spacing(3)
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const [popEl, setEl] = useState(null);

  function handlePopover(event) {
    setEl(event.currentTarget);
  }
  function handlePopoverClose(event) {
    setEl(null);
  }

  const open = Boolean(popEl);
  const id = open ? 'popover' : undefined;

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Grid container direction='column' className={classes.root}>
      <Grid item>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'>
          <Grid item>
            <Typography variant='h5'>Dashboard</Typography>
            <Typography variant='caption'>dashboard & statistics</Typography>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup='true'
              onClick={handleClick}>
              <Typography variant='body2'>
                17 January 2016 - 16 Febuary 2016
              </Typography>
              <Icon>keyboard_arrow_down</Icon>
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              <MenuItem onClick={handleClose}>
                17 Febuary 2016 - 16 March 2016
              </MenuItem>
              <MenuItem onClick={handleClose}>
                17 March 2016 - 16 April 2016
              </MenuItem>
              <MenuItem onClick={handleClose}>
                17 April 2016 - 16 May 2016
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Paper className={classes.paper}>
          <Grid container direction='column'>
            <Grid container direction='row'>
              <Grid
                container
                direction='row'
                justify='flex-start'
                alignItems='flex-end'>
                <Grid item>
                  <Typography variant='h4'>Totals </Typography>
                </Grid>{' '}
                <Grid item>
                  <Typography
                    variant='caption'
                    className={classes.lastWeekText}>
                    Last Week
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                direction='row'
                justify='space-evenly'
                alignItems='center'
                className={classes.numberGrid}>
                <Grid item>
                  <Typography variant='h4'>597</Typography>
                  <Typography variant='caption'>New Feedbacks</Typography>
                </Grid>
                <Grid item className={classes.dividerLeft}>
                  <Typography variant='h4'>16.6M$</Typography>
                  <Typography variant='caption'>Total Profit</Typography>
                </Grid>
                <Grid item>
                  <Typography variant='h4'>7.5K</Typography>
                  <Typography variant='caption'>New Orders</Typography>
                </Grid>
                <Grid item>
                  <Typography variant='h4'>+48%</Typography>
                  <Typography variant='caption'>Brand Popularity</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid
              container
              direction='row'
              justify='space-between'
              alignItems='center'>
              <Grid item sm={12} md={6} className={classes.secondView}>
                <Grid container direction='row'>
                  <Grid container direction='row' justify='space-between'>
                    <Grid item>
                      <Grid
                        container
                        direction='row'
                        justify='flex-start'
                        alignItems='flex-end'>
                        <Grid item>
                          <Typography variant='h5'>Site Visits </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant='caption'
                            className={classes.lastWeekText}>
                            Weekly stats
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        direction='row'
                        justify='flex-start'
                        alignItems='flex-end'>
                        <Grid item>
                          <Button
                            variant='contained'
                            className={classes.newButton}>
                            NEW
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant='outlined'
                            className={classes.returnButton}>
                            RETURNING
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <img
                    style={{ width: '100%', height: '50%' }}
                    src={img1}
                    alt='img1'
                  />
                </Grid>
              </Grid>
              <Grid item sm={12} md={6} className={classes.secondView}>
                <Grid container justify='space-between' alignItems='center'>
                  <Grid item>
                    <Grid
                      container
                      direction='row'
                      justify='flex-start'
                      alignItems='flex-end'>
                      <Grid item>
                        <Typography
                          variant='h5'
                          className={classes.lastWeekText}>
                          Revenue
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant='caption'
                          className={classes.lastWeekText}>
                          Monthly Stats
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={handlePopover}>
                      FILTER RANGE
                    </Button>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={popEl}
                      onClose={handlePopoverClose}
                      anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right'
                      }}>
                      <div className={classes.popover} w>
                        <Grid container direction='row'>
                          <Grid item>
                            <form className={classes.container} noValidate>
                              <TextField
                                id='date'
                                label='From'
                                type='date'
                                defaultValue='2019-06-24'
                                className={classes.textField}
                                InputLabelProps={{
                                  shrink: true
                                }}
                              />
                            </form>
                          </Grid>
                          <Grid item>
                            <form className={classes.container} noValidate>
                              <TextField
                                id='date'
                                label='To'
                                type='date'
                                defaultValue='2019-07-24'
                                className={classes.textField}
                                InputLabelProps={{
                                  shrink: true
                                }}
                              />
                            </form>
                          </Grid>
                        </Grid>
                      </div>
                    </Popover>
                  </Grid>
                </Grid>
                <Grid>
                  <img
                    style={{ width: '100%', height: '50%' }}
                    src={img2}
                    alt='img2'
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
