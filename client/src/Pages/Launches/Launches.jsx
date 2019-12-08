import React from 'react';
import LaunchesTable from '../../components/launches-components/LaunchesTable/LaunchesTable';
import withHocs from './LaunchesHoc';

class Launches extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <>
                <div className={classes.wrapper}>
                    <LaunchesTable/>
                </div>
            </>
        );
    }
}

export default withHocs(Launches)
