import withHocs from "./UsersAlertHoc";
import React from "react";
import { Subscription } from "react-apollo";
import newUserSubscription from "./subscriptions";

const UserAlert = props => {
  const { data } = props;
  console.log("data", data);
  return (
    <Subscription subscription={newUserSubscription}>
      {({ data }) => {
        return <h3>Newest num: {!data ? "waiting..." : data.newUser.id}</h3>;
      }}
    </Subscription>
  );
};

export default withHocs(UserAlert);
