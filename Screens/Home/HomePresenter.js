import React from "react";
import { Text, View } from "react-native";
import propTypes from "prop-types";
import styled from "styled-components"
import HomeSlider from "../../components/HomeSlider";
import { BG_COLOR } from "../../constants/Color";
import Layout from "../../constants/Layout"

const Container = styled.ScrollView`
    background-color: ${BG_COLOR};
`;

const HomePresenter = ( {loading,main,recommend,best}) =>
    (loading? <Text>loading</Text> : (
            <View style = {{flex : 1, paddingTop:5}}>
                <HomeSlider/>
            </View>
        )
    )

HomePresenter.propTypes = {
    loading : propTypes.bool.isRequired,
    main : propTypes.array,
    recommend : propTypes.array,
    best : propTypes.array
}

export default HomePresenter;