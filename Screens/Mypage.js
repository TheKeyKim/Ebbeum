import React from "react";
import { Text } from "react-native";
export default () =>( 
    <>
    <Text>성별 : {global.gender}</Text>
    <Text>나이 : {global.Age} {global.Period}</Text>
    <Text>키 : {global.TallDec} {global.TallDigit} </Text>
    <Text>상의사이즈 : {global.SizeUpper}</Text>
    <Text>하의사이즈 : {global.SizeDown}</Text>
    </>
    );