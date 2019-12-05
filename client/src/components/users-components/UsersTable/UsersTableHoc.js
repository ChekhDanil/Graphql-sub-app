import {withStyles} from '@material-ui/core/styles';
import {compose} from 'recompose';
import {graphql} from 'react-apollo';

import {usersQuery} from './queries';

import {styles} from './styles';

const withGraphQL = graphql(usersQuery, {
    options: ({name = ''}) => ({
        variables: {name},
    }),
});

export default compose(withStyles(styles), withGraphQL);
