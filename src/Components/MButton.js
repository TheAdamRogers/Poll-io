import React from "react";
import { Button } from "react-native";
import styled from "styled-components";

const CustomButton = styled(Button)`
  background-color: blue;
`;

export const MButton = ({ label, ...props }) => (
  <CustomButton title={label} {...props}></CustomButton>
);
