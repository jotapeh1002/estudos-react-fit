import { View, Text, Image, Dimensions, ScrollView, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ExibirDados() {
    interface Dados {
        id: string;
        image: any;
        ingr: string;
    }

    const [numberRows, setNumberRows] = useState(5)

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
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 15, marginTop: 5, marginLeft: 4 }}>Ingredientes</Text>
                {ingredientsArray.map((ingredient: string, index: number) => (
                    index < numberRows && (<View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 12, marginRight: 6 }}>
                        <Text style={{ fontSize: 20, marginTop: 4 }}>-</Text>
                        <Text key={index} style={{ fontSize: 16.5, marginVertical: 5, marginHorizontal: 10 }}>
                            {ingredient}
                        </Text>
                    </View>)
                ))}
                <TouchableOpacity onPress={() => setNumberRows((prevRows) => (prevRows < 10 ? 5000 : 5))}>
                    <View style={{ marginTop: 14 }}>
                        <Text style={{
                            color: 'white', fontSize: 16.5, top:numberRows<10?-50:0 ,textAlign: 'center', backgroundColor: 'rgba(0,0,255, 0.5)', paddingVertical: 15,
                             width: '100%', zIndex: 200
                        }}>Ver {numberRows > 9 ? 'Menos' : 'Mais'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}