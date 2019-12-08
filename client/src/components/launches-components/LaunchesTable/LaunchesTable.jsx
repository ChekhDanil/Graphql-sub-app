import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import withHocs from './LaunchesTableHoc';

class LaunchesTable extends React.Component {
    render() {
        const {classes, data = {}} = this.props;
        const {launchesPast = []} = data;
        return (
            <Paper className={classes.root}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Launch Name</TableCell>
                            <TableCell>Desc</TableCell>
                            <TableCell>Photo</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {launchesPast.map(launch => {
                            return (
                                <TableRow key={launch.id}>
                                    <TableCell component="th" scope="row">{launch.mission_name}</TableCell>
                                    <TableCell align="right">{launch.details}</TableCell>
                                    <TableCell align="right">
                                        <img src={launch.links.flickr_images[0]}  width={200} height={200} alt=""/>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default withHocs(LaunchesTable);
