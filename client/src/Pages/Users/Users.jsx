import React from "react";
import {Subscription} from "react-apollo";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import UsersTable from "../../components/users-components/UsersTable/UsersTable";
import UsersForm from "../../components/users-components/UsersForm/UsersForm";
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

    handleChange = name => ({target}) => {
        this.setState({[name]: target.value});
    };

    render() {
        const {name, open} = this.state;
        const {classes} = this.props;
        return (
            <>
                <Subscription subscription={newUserSubscription}>
                    {({data}) => {
                        return (
                            <div>
                                <h3>Last added user name: {!data ? "waiting..." : data.newUser.name}</h3>
                                <h3>Last added user id: {!data ? "waiting..." : data.newUser.id}</h3>
                            </div>
                        )
                    }}
                </Subscription>
                <UsersForm
                    handleChange={this.handleChange}
                    selectedValue={{name}}
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
                        <AddIcon/>
                    </Fab>
                </div>
            </>
        );
    }
}

export default withHocs(Users);
