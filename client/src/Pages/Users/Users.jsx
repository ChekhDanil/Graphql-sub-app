import React from "react";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import UsersTable from "../../components/users-components/UsersTable/UsersTable";
import UsersForm from "../../components/users-components/UsersForm/UsersForm";
import withHocs from "./UsersHoc";

class Users extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(function(state) {
      return {
        open: !state.open
      };
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
        <UsersForm
          handleChange={this.handleChange}
          selectedValue={{ name }}
          open={open}
          onClose={this.handleToggle}
        />
        <div className={classes.wrapper}>
          <UsersTable />
          <Fab
            onClick={this.handleToggle}
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
