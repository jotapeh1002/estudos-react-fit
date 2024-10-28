import React from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
// import { FontAwesome } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { Loading } from '../loading/Loading'
import { NoFound } from '../noFound/NoFound'
// import { CardInfo, Cards } from '../cardsInfo/CardInfo';
import { CardMedium } from '../cardMediun/CardMedium';

export function Apibuscas({ cityProps }) {

    const [city, setCity] = useState(null)
    const [loading, setLoading] = useState(true)

    const buscaApiCity = async (parameter) => {
        try {
            const response = await fetch(``)
            if (!response.ok) {
                throw new Error(`Erro ao buscar receitas: ${response.statusText}`)
            }
            const data = await response.json()
            return data
        } catch (error) {
            console.error('Erro:', error)
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await buscaApiCity(cityProps)
            setCity(data.meals)
            setLoading(false)
        }
        fetchData()
    }, [])

    // return (
    //     <></>
    //     // <View style={{ justifyContent: 'center', alignItems: 'center' }} >
    //     //     {loading ? (
    //     //         <View  >
    //     //             <Loading />
    //     //         </View>
    //     //     ) : (
    //     //         city ? (<>
    //     //             <CardMedium
    //     //                 horizontal={false}
    //     //                 button={false}
    //     //                 label={false}
    //     //                 fontSize={16}
    //     //                 configCard={city}
    //     //                 link={'/'} />
    //     //         </>) : (
    //     //             <View >
    //     //                 <NoFound />
    //     //             </View>
    //     //         )
    //     //     )}
    //     // </View> 
    // )
}