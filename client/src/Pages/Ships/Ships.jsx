import React from 'react';
import DirectorsTable from '../../components/ships-components/ShipsTable/ShipsTable';
import withHocs from './ShipsHoc';

class Ships extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <>
                <div className={classes.wrapper}>
                    <DirectorsTable/>
                </div>
            </>
        );
    }
}

export default withHocs(Ships);
