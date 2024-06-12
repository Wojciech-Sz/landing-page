import { Html } from "@react-email/components";
import * as React from "react";

type Props = {
  firstName: string;
  secondName: string;
  phoneNumber: string;
  message: string;
};

const EmailTemplate = ({
  firstName,
  secondName,
  phoneNumber,
  message,
}: Props) => {
  return (
    <Html>
      <h1>
        {firstName} {secondName}
      </h1>
      <p>{phoneNumber}</p>
      <p>{message}</p>
    </Html>
  );
};

export default EmailTemplate;
