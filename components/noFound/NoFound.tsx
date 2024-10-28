import React from "react";
import { Image, View, StyleSheet } from "react-native";

export function NoFound() {
    return (
        <View style={{flex: 1,justifyContent: "center",  alignItems: "center"}}>
            <Image source={require('../../assets/noFound.gif')} style={{ width: 220, height: 220 }} />
        </View>
    );
}