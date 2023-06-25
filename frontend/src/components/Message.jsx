import React from "react";
import { Alert } from "react-bootstrap";

/*
 *Alert requires two arguments
 *Variant represents red color for danger, green for success and so on
 *chlidren is the content that'll be wrapped by the alert component
 */
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
