import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const Button = styled(TouchableOpacity)`
  color: white;
  background-color: #005eb8;
  border-radius: 15px;
  padding: 10px;
  width: 100%;
  align-items: center;
`;

const Title = styled(Text)`
  color: white;
  font-weight: bold;
`;

export default SubmitButton = ({onPress}) => (
  <Button onPress={() => onPress()}>
    <Title> Submit </Title>
  </Button>
);
