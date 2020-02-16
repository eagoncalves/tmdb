import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Animated } from 'react-native';

export const Container = styled.View`
  background-color: #5ca0d3;
  flex:1;
  padding-top: ${getStatusBarHeight()}px;

 `