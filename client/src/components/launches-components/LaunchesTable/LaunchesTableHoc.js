import {withStyles} from '@material-ui/core/styles';
import {compose} from 'recompose';
import {graphql} from 'react-apollo';

import {launchesQuery} from './queries';

import {styles} from './styles';

const withGraphQL = graphql(launchesQuery);

export default compose(withStyles(styles), withGraphQL);
