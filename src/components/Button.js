import React from "react";
import { Button } from "semantic-ui-react";

const ReadMore = props => (
  <div>
    <Button primary>{props.children}</Button>
  </div>
);

export default ReadMore;
