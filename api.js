import axios from "axios";
import React from 'react';
import {Image} from "react-native";

export const recommend = { 
    getCody : (num) => axios.get(
            `https://kmlre416jb.execute-api.ap-northeast-2.amazonaws.com/firstTest/image?height=3&weight=80&gender=male&size=3&age=3&bodyType=dd&clothes_kind=outers&picture_num=${num}`)
}
