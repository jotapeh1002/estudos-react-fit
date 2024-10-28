import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';

interface CardMediumProps {
    textDetail: string;
    image: any;
    link?: any;
    widthFactor?: number;
    heightFactor?: number;
    backgroundColor?: string;
    textColor?: string;
    iconColor?: string;
    shadow?: number;
    fontSize?: number;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export function CardInfo({
    textDetail, image, link = '', widthFactor = 0.74, heightFactor = 0.28, shadow = 0,
    backgroundColor = 'white', textColor = 'black', iconColor = 'rgba(255,0,0,0.8)', fontSize = 16
}: CardMediumProps) {

    const [isFavorited, setIsFavorited] = useState(false);
    const cardWidth = screenWidth * widthFactor;
    const cardHeight = screenHeight * heightFactor;

    return (
        <View style={{
            width: cardWidth, elevation: shadow, height: cardHeight, backgroundColor, borderRadius: 15,
            marginHorizontal: 5, marginBottom: 14,marginTop:14, padding: 6, overflow: 'hidden'
        }}>
            <Link href={link}>
                <View>
                    <Image
                        source={image}
                        style={{ width: cardWidth - 12, height: cardHeight * 0.7, flex: 1, borderRadius: 10 }}
                        resizeMode='cover'
                    />
                    <View style={{ width: cardHeight / 1.8, justifyContent: 'center', height: cardHeight / 3.8 }}>
                        <Text numberOfLines={2} ellipsizeMode='tail' style={{ color: textColor, paddingLeft: 8, fontSize }}>
                            {textDetail}
                        </Text>
                    </View>
                </View>
            </Link>
            <TouchableOpacity
                style={{ bottom: cardHeight / 17, padding: 10, position: 'absolute', right: 7 }}
                onPress={() => { setIsFavorited(!isFavorited) }}
            >
                <FontAwesome name={isFavorited ? 'heart' : 'heart-o'} color={iconColor} size={24} />
            </TouchableOpacity>
        </View>
    )
}