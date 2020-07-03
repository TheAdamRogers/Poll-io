import { ScrollView, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  padding: 10% 0 0 0;
  align-items: center;
  background-color: #e7e7e7;
`;

export const Card = styled(View)`
  background-color: white;
  justify-content: ${props => props.justifyContent || "flex-start"};
  align-items: center;
  width: ${props => props.width || "80%"};
  height: ${props => props.height || "auto"};
  padding: 5px 5px 5px 5px;
  border-radius: 4px;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4;
`;

export const Line = styled(View)`
  height: 1px;
  width: 100%;
  background-color: ${props => props.color || "#e7e7e7"};
  margin: 10px 5px;
`;

export const HeaderContainer = styled(View)`
  margin: 20px 0 0 0;
`;

export const CustomScrollView = styled(ScrollView)`
  flex: 1;
  width: 100%;
`;
