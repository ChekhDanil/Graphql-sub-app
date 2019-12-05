import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import LaunchesTable from '../../components/launches-components/LaunchesTable/LaunchesTable';
import withHocs from './LaunchesHoc';

class Launches extends React.Component {
    state = {
        open: false,
        name: '',
        genre: '',
        watched: false,
        rate: 0,
        directorId: '',
    };

    handleClickOpen = (data = {}) => {
        this.setState({
            open: true,
            ...data,
            directorId: data.director ? data.director.id : '',
        });
    };

    handleClose = () => {
        this.setState({
            name: '',
            genre: '',
            watched: false,
            rate: 0,
            directorId: '',
            open: false
        });
    };


    render() {
        const {classes} = this.props;
        return (
            <>
                <div className={classes.wrapper}>
                    <LaunchesTable onOpen={this.handleClickOpen} onClose={this.handleClose}/>
                </div>
            </>
        );
    }
};

export default withHocs(Launches)
