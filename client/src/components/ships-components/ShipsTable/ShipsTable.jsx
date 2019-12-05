import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import withHocs from './ShipsTableHoc';

class ShipsTable extends React.Component {
    render() {
        const {classes, data = {}} = this.props;
        const {ships = []} = data;
        return (
            <Paper className={classes.root}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ship Name</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Roles</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ships.map(ship => {
                            return (
                                <TableRow key={ship.id}>
                                    <TableCell component="th" scope="row">{ship.name}</TableCell>
                                    <TableCell align="right">{ship.type}</TableCell>
                                    <TableCell align="right">{ship.roles.map(role => `${role} `)}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
};

export default withHocs(ShipsTable);
