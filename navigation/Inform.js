import React from "react-native"
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import t1 from "../InformNav/t1";
import t2 from "../InformNav/t2";
import t3 from "../InformNav/t3";
import t4 from "../InformNav/t4";

const InformNavigation = createStackNavigator(
    {
        t1 : t1,
        t2 : t2,
        t3 : t3,
        t4 : t4
    },{
        headerMode : "none"
    }
);

export default createAppContainer(InformNavigation);