import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";

const MainNavigation = createStackNavigator({
    Tabs : {
        screen : TabNavigation,
        navigationOptions : {
            header : null
        }
    }
})

export default createAppContainer(MainNavigation);