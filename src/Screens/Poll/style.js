import { Text, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  width: 100%;
  background-color: #e7e7e7;
  padding-top: 10px;
`;

export const QuestionTitle = styled(Text)`
  font-size: 20px;
  text-align: center;
`;

export const Bold = styled(Text)`
  font-size: 15px;
  font-weight: bold;
`;

export const Card = styled(View)`
  background-color: white;
  justify-content: ${props => props.justifyContent || "flex-start"};
  align-items: ${props => props.alignItems || "center"};
  width: ${props => props.width || "80%"};
  border-radius: 4px;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4;
  padding: ${props => props.padding || "5px"};
  margin: ${props => props.Margin || "10px 0"};
`;
