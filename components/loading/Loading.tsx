import React from "react";
import { Image, View, StyleSheet } from "react-native";

export function Loading() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image source={require('../../assets/load.gif')} style={{ width: 160, height: 160  }} />
        </View>
    );
}