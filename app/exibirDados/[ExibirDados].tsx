import { View, Text, Image, Dimensions, ScrollView, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

export default function ExibirDados() {
    interface Dados {
        id: string;
        image: any;
        ingr: string;
    }

    const [numberRows, setNumberRows] = useState(5)
    const [isFavorited, setIsFavorited] = useState(false);
    // const [numIndex, setnumIndex] = useState(0);


    const widthD = Dimensions.get('window').width;

    const exibirDados = useRoute();
    const { id, image, ingr } = exibirDados.params as Dados;
    const cleanedIngredients = ingr.replace(/[\[\]]/g, '')
    const ingredientsArray = cleanedIngredients.split(/",\s*"/).map(item => item.replace(/"/g, '').trim())

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackVisible: false,
            headerTitle: () => (
                <View style={{ alignItems: 'center', width: widthD * 0.93, marginVertical: 15 }}>
                    <Text style={{ fontSize: 25, fontWeight: '100' }}> RECEITAS </Text>
                </View>
            ),
        });
    }, [navigation]);

    return (
        <ScrollView>
            <View style={{ margin: 10 }}>
                <StatusBar />
                <Image
                    source={image}
                    style={{ height: 210, resizeMode: 'stretch', marginVertical: 0, borderRadius: 10, marginBottom: 10, width: widthD * 0.95, }}
                />
                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginRight: 25 }} >
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 15, marginTop: 5, marginLeft: 4 }}>Ingredientes</Text>
                    <FontAwesome name={isFavorited ? 'heart' : 'heart-o'} color={'red'} style={{ marginTop: 10, padding: 20, position: 'absolute', right: -12, top: -15 }}
                        onPress={() => setIsFavorited(isFavorited ? false : true)} size={26} />
                </View>
                {ingredientsArray.map((ingredient: string, index: number) => (
                    index < numberRows && (<View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 12, marginRight: 6 }}>
                        <Text style={{ fontSize: 20, marginTop: 4 }}>-</Text>
                        <Text key={index} style={{ fontSize: 16.5, marginVertical: 5, marginHorizontal: 10 }}>
                            {ingredient}
                        </Text>
                    </View>)
                ))}
                {ingredientsArray.length >5 && <TouchableOpacity style={{ justifyContent: 'center', alignItems: "center" }} onPress={() => setNumberRows((prevRows) => (prevRows < 10 ? 5000 : 5))}>
                    <View style={{ marginTop: 10, height: 40, backgroundColor: 'rgba(100,0,255, 0.5)', borderRadius: 20, width: 160, }}>
                        <Text style={{
                            fontSize: 16.5, textAlign: 'center', color: 'rgba(255,255,255, 1)', paddingVertical: 8.5, zIndex: 200
                        }}>Ver {numberRows > 9 ? 'Menos' : 'Mais'}</Text>
                    </View>
                </TouchableOpacity>}
            </View>
        </ScrollView>
    );
}