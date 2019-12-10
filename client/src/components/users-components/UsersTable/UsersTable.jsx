import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import MoreIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import DeleteIcon from "@material-ui/icons/Delete";

import DirectorsDialog from "../UsersDialog/UsersDialog";

import withHocs from "./UsersTableHoc";

class UsersTable extends React.Component {
  state = {
    openDialog: false
  };

  handleDialogOpen = () => {
    this.setState({ openDialog: true });
  };

  handleDialogClose = () => {
    this.setState({ openDialog: false });
  };

  handleClick = data => ({ currentTarget }) => {
    this.setState({
      anchorEl: currentTarget,
      data
    });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDelete = () => {
    this.handleDialogOpen();
    this.handleClose();
  };

  render() {
    const { anchorEl, openDialog, data: activeElem = {} } = this.state;
    const { classes, data = {} } = this.props;
    const { users = [] } = data;

    return (
      <>
        <DirectorsDialog
          open={openDialog}
          handleClose={this.handleDialogClose}
          id={activeElem.id}
        />
        <Paper className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell align="right">User Name</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user => {
                return (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell align="right">{user.name}</TableCell>
                    <TableCell align="right">
                      <>
                        <IconButton
                          color="inherit"
                          onClick={this.handleClick(user)}
                        >
                          <MoreIcon />
                        </IconButton>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={this.handleClose}
                        >
                          <MenuItem onClick={this.handleDelete}>
                            <DeleteIcon /> Delete
                          </MenuItem>
                        </Menu>
                      </>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </>
    );
  }
}

export default withHocs(UsersTable);
