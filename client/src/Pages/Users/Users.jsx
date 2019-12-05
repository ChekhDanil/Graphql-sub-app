import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import UsersTable from "../../components/users-components/UsersTable/UsersTable";
import UsersForm from "../../components/users-components/UsersForm/UsersForm";
import withHocs from './DirectorsHoc';

class Users extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({
            open: true,
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
                <UsersForm handleChange={this.handleChange} selectedValue={{name}} open={open}
                               onClose={this.handleClose}/>
                <div className={classes.wrapper}>
                    <UsersTable onOpen={this.handleClickOpen} onClose={this.handleClose}/>
                    <Fab onClick={() => this.handleClickOpen(null)} color="primary" aria-label="Add"
                         className={classes.fab}>
                        <AddIcon/>
                    </Fab>
                </div>
            </>
        );
    }
};

export default withHocs(Users);
