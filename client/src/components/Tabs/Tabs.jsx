import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import CameraIcon from '@material-ui/icons/Camera';
import GroupIcon from '@material-ui/icons/Group';
import StarIcon from '@material-ui/icons/Star';
import StarsIcon from '@material-ui/icons/Stars';

import Movies from '../../Pages/Movies/Movies';
import Directors from '../../Pages/Directors/Directors';
import withHocs from './TabsHoc';

const TabContainer = ({ children, dir }) => (
  <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
    {children}
  </Typography>
);

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => { this.setState({ value }); };
  handleChangeIndex = index => { this.setState({ value: index }); };

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs variant='fullWidth' value={value} onChange={this.handleChange}>
    {/*        <Tab label="Launches" icon={<StarIcon />} />*/}
            <Tab label="Ships" icon={<StarsIcon />} />
 {/*           <Tab label="Users" icon={<GroupIcon />} />*/}
          </Tabs>
        </AppBar>
        <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={this.handleChangeIndex} >
         {/* <TabContainer dir={theme.direction}><Movies /></TabContainer>*/}
          <TabContainer dir={theme.direction}><Directors /></TabContainer>
    {/*      <TabContainer dir={theme.direction}><Movies /></TabContainer>*/}
        </SwipeableViews>
      </div>
    );
  }
}

export default withHocs(SimpleTabs);
