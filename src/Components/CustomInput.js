import React from "react";
import { Text, TextInput, View } from "react-native";
import styled from "styled-components";

const Container = styled(View)`
  width: 100%;
`;

const Input = styled(TextInput)`
  border-radius: 4px;
  background-color: #f3f3f3;
  border: 0.5px solid #f7f7f7;
  font-size: 20px;
`;

export const CustomInput = ({
  label,
  password,
  onChange,
  value,
  width,
  ...other
}) => (
  <Container>
    <Text>{label}</Text>
    <Input
      secureTextEntry={password}
      onChange={onChange}
      value={value}
      width={width}
      {...other}
    ></Input>
  </Container>
);
