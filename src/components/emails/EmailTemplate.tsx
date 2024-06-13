import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

type Props = {
  firstName: string;
  // secondName: string;
  // phoneNumber: string;
  // message: string;
};

const EmailTemplate = ({
  firstName,
  // secondName,
  // phoneNumber,
  // message,
}: Props) => {
  return (
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you
        uncover qualified leads.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={paragraph}>
            Hi {firstName}
            {"phoneNumber"},
          </Text>
          <Text style={paragraph}>
            Welcome to Koala, the sales intelligence
            platform that helps you uncover qualified leads
            and close deals faster.
          </Text>
          <Section style={btnContainer}></Section>
          <Text style={paragraph}>
            Best,
            <br />
            The Koala team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            470 Noor Ave STE B #1148, South San Francisco,
            CA 94080
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
