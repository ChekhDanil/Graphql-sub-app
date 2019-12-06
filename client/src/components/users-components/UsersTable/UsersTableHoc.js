import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { graphql } from "react-apollo";

import { usersQuery } from "./queries";
import newUserSubscription from "./subscriptions";
import { styles } from "./styles";

const withGraphQL = graphql(usersQuery);

export default compose(withStyles(styles), withGraphQL);
