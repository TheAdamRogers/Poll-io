import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const Container = styled(View)`
  background-color: white;
  justify-content: ${props => props.justifyContent || "flex-start"};
  align-items: center;
  border-radius: 4px;
  shadow-color: #000;
  shadow-offset: {width: 2, height: 2};
  shadow-opacity: 0.2;
  shadow-radius: 4;
  padding: ${props => props.padding || "10px"};
  margin: 10px 20px;
`;

export const Question = () => {
  return (
    <Container>
      <Text>Hello</Text>
    </Container>
  );
};
