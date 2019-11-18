import React from "react";
import propTypes from "prop-types";
import {Image, View, Text} from "react-native";
import Layout from "../constants/Layout";

const CodyRec = ({loaded, link}) => (
    loaded? (
            <View>
                <Image style = {{height : Layout.height/5.2, width : Layout.width*0.3}} 
                                source = {{uri: link }} />
            </View>) :
            (<Text>dd</Text>)
)

CodyRec.propTypes = {
    link : propTypes.string.isRequired
}

export default CodyRec;