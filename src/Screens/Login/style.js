import { ActivityIndicator, Text, View } from "react-native";
import styled from "styled-components";

export const CenterView = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  padding-top: 45%;
  background-color: #e7e7e7;
`;

export const Card = styled(View)`
  background-color: white;
  justify-content: ${props => props.justifyContent || "flex-start"};
  width: 80%;
  height: 50%;
  border-radius: 4px;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4;
  padding: ${props => props.padding || "2px"};
`;

export const ErrorText = styled(Text)`
  color: red;
`;

export const Loader = styled(ActivityIndicator)``;
