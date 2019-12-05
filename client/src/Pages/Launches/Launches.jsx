import React from 'react';
import LaunchesTable from '../../components/launches-components/LaunchesTable/LaunchesTable';
import withHocs from './LaunchesHoc';

class Launches extends React.Component {
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
}

export default withHocs(Launches)
