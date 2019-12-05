import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

import DirectorsDialog from '../DirectorsDialog/DirectorsDialog';
import DirectorsSearch from '../DirectorsSearch/DirectorsSearch';

import withHocs from './DirectorsTableHoc';

class DirectorsTable extends React.Component {
  state = {
    anchorEl: null,
    openDialog: false,
    name: '',
  };

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleSearch = (e) => {
    const { data } = this.props;
    const { name } = this.state;

    if(e.charCode === 13) {
      data.fetchMore({
        variables: { name },
        updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult,
      });
    }
  };

  handleDialogOpen = () => { this.setState({ openDialog: true }); };
  handleDialogClose = () => { this.setState({ openDialog: false }); };

  handleClose = () => { this.setState({ anchorEl: null }); };

  render() {
    const { anchorEl, openDialog, data: activeElem = {}, name } = this.state;
    const { classes, data = {} } = this.props;
    const { ships = [] } = data;

    return (
      <>
        <Paper>
          <DirectorsSearch name={name} handleChange={this.handleChange} handleSearch={this.handleSearch} />
        </Paper>
        <Paper className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ship Name</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Roles</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {ships.map(ship => {
                return (
                  <TableRow key={ship.id}>
                    <TableCell component="th" scope="row">{ship.name}</TableCell>
                    <TableCell align="right">{ship.type}</TableCell>
                    <TableCell align="right">{ship.roles.map(role => `${role} `)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </>
    );
  }
};

export default withHocs(DirectorsTable);
