import { compose } from "recompose";
import { graphql } from "react-apollo";

import { newUserSubscription } from "./subscriptions";
import { usersQuery } from "./subscriptions";
const withGraphqlDelete = graphql(newUserSubscription);

export default compose(withGraphqlDelete);
