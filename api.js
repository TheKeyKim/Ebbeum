import axios from "axios";
import React from 'react';
import {Image} from "react-native";

export const recommend = { 
    getCody : (tall,  gender,top, bot, bodyType, type, num) => axios.get(
            `https://kmlre416jb.execute-api.ap-northeast-2.amazonaws.com/alpha/image?height=${tall}&gender=${gender}&topSize=${top}&pantsSize=${bot}&age=30&bodyType=${bodyType}&clothesKind=${type}&pictureNum=${num}`
            ),
    checkID : (ID) => axios.get(
        `https://hk4llx6x5j.execute-api.ap-northeast-2.amazonaws.com/first/id?id=${ID}`
    ),
    LogIN: (ID,pw) => axios.get(
        `https://hk4llx6x5j.execute-api.ap-northeast-2.amazonaws.com/first/account-data?id=${ID}&pw=${pw}`
    )
}