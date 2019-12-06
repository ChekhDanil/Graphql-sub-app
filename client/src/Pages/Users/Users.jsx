import React from "react";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Subscription } from "react-apollo";
import UsersTable from "../../components/users-components/UsersTable/UsersTable";
import UsersForm from "../../components/users-components/UsersForm/UsersForm";
import UserAlert from "../../components/users-components/UsersAlert/UsersAlert";
import withHocs from "./UsersHoc";

import newUserSubscription from "./subscriptions";

class Users extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleChange = name => ({ target }) => {
    this.setState({ [name]: target.value });
  };

  render() {
    const { name, open } = this.state;
    const { classes } = this.props;
    return (
      <>
        <UserAlert />
        <Subscription subscription={newUserSubscription}>
          {({ data }) => {
            console.log("data", data);
            return <h3>Newest num: {!data ? "waiting..." : data.user}</h3>;
          }}
        </Subscription>
        <UsersForm
          handleChange={this.handleChange}
          selectedValue={{ name }}
          open={open}
          onClose={this.handleClose}
        />
        <div className={classes.wrapper}>
          <UsersTable
            onOpen={this.handleClickOpen}
            onClose={this.handleClose}
          />
          <Fab
            onClick={() => this.handleClickOpen(null)}
            color="primary"
            aria-label="Add"
            className={classes.fab}
          >
            <AddIcon />
          </Fab>
        </div>
      </>
    );
  }
}

export default withHocs(Users);
