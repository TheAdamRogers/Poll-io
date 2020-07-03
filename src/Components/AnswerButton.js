import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const Container = styled(TouchableOpacity)`
  width: 100%;
  margin: 10px 0px;
  flex-direction: row;
  border: 1px solid black;
  border-radius: 4px;
  align-items: center;
  padding: 0 5px;
  background-color: ${props =>
    props.id === props.value ? "#90ee90" : "white"};
`;
const IDTag = styled(Text)`
  border: 1px solid black;
  padding: 0px 5px;
  margin: 0 5px 0 0;
  border-radius: 5px;
`;

const Title = styled(Text)`
  margin: 5px;
  width: 70%;
`;

const handler = id => {
  console.log(id);
};

export default RadioButton = props => (
  <Container
    onPress={() => props.selectAnswer(props.id)}
    value={props.value}
    id={props.id}
  >
    <IDTag>{props.id}</IDTag>
    <Title>{props.children}</Title>
  </Container>
);
