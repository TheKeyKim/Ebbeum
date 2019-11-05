import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import t1 from "../InformNav/t1";
import t2 from "../InformNav/t2";
import t3 from "../InformNav/t3";
import t4 from "../InformNav/t4";

const MainNavigation = createStackNavigator({
    t1 : {
        screen : t1,
        navigationOptions : {
            header : null
        }
    },
    t2 : {
        screen : t2,
        navigationOptions : {
            header : null
        }
    },
    t3 : {
        screen : t3,
        navigationOptions : {
            header : null
        }
    },
    t4 : {
        screen : t4,
        navigationOptions : {
            header : null
        }
    },
    Tabs : {
        screen : TabNavigation,
        navigationOptions : {
            header : null
        }
    }
})

export default createAppContainer(MainNavigation);