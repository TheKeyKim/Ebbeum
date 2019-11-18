import axios from "axios";
import React from 'react';
import {Image} from "react-native";

export const recommend = { 
    getCody : () => axios.get(
            "https://kmlre416jb.execute-api.ap-northeast-2.amazonaws.com/firstTest/image?height=1&weight=1&gender=male&size=1&age=1&bodytype=dd")
}
