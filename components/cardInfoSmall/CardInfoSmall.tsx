import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

export function CardInfoSmall({ title,img,left,color, width = 0.45 }: { title?: string, img?:any,left?: number,width?: number,color?:any }) {
    const screenWidth = Dimensions.get('window').width;

    return (
        <TouchableOpacity>
            <View style={{
                backgroundColor: color,flexDirection: 'row',justifyContent: 'space-between',height: 70,
                width: screenWidth * width,alignItems: 'center',borderRadius: 10,marginHorizontal: 5,
                overflow: 'hidden',marginBottom: 18,paddingHorizontal: 10,
            }}>
                <Text style={{color: 'white',fontSize: 14, flexShrink: 1,
                }}>
                    {title}
                </Text>
                <Image
                    source={img}
                    style={{ left: left, height: 78, width: 80,borderRadius: 40, }}
                />
            </View>
        </TouchableOpacity>
    );
}
