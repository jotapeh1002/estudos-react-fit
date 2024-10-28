import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Link } from 'expo-router';
import { CardInfo } from '../cardsInfo/CardInfo';
import { CardInfoSmall } from '../cardInfoSmall/CardInfoSmall';
import { useEffect, useState } from 'react';
import { receitas } from '../../jsonComponent/receitas';

type CardItem = {
    id: string
    category?: string
    color?: string
    img?: any
    left?: any
    strMeal?: string
    strMealThumb?: string
    width?: number
    imagePath: any
    ingredients: string[]
}

interface CardMediumProps {
    configCard?: any
    title?: string
    button?: boolean
    img?: any
    label?: boolean
    link?: any
    smallCard?: boolean
    fontSize?: number
    horizontal?: boolean
    cats?: string
    maxItems?: number
}

export function CardMedium(
    { configCard, horizontal = true, fontSize = 17, maxItems = 6, title, button = true, link = '', label = true, smallCard = false, cats = ''
    }: CardMediumProps) {

    const [isHorizontal, setIsHorizontal] = useState(horizontal)
    const [filteredItems, setFilteredItems] = useState<CardItem[]>([])

    useEffect(() => {
        setIsHorizontal(horizontal);
        const filtered = receitas.filter(item => item.category === cats)

        const shuffleArray = (array: CardItem[]) => {
            return array.sort(() => Math.random() - 0.5)
        }

        const shuffledItems = shuffleArray(filtered);
        setFilteredItems(shuffledItems.slice(0, maxItems === 0 ? filtered.length : maxItems))

    }, [horizontal]);

    const renderItem = ({ item }: { item: CardItem }) => {

        return !smallCard ? (
            <CardInfo
                widthFactor={horizontal ? undefined : 0.47}
                textDetail={item.id}
                link={`exibirDados/[ExibirDados]?id=${item.id}&image=${encodeURIComponent(item.imagePath)}&ingr=${encodeURIComponent(JSON.stringify(item.ingredients))}`}
                fontSize={fontSize}
                image={item.imagePath}
            />
        ) : (
            <CardInfoSmall
                img={item.img}
                left={item.left || 25}
                width={item.width}
                title={item.id}
                color={item.color}
            />
        )
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: !smallCard ? -12 : 0, justifyContent: 'space-between' }}>
                {label && (
                    <Text style={{ fontSize: 21, paddingHorizontal: 10, paddingVertical: 12 }}>
                        {title}
                    </Text>
                )}
                {button && (
                    <Link href={link}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 14, color: 'rgb(150,150,150)' }}> Ver Mais </Text>
                        </TouchableOpacity>
                    </Link>
                )}
            </View>
            <FlatList
                data={smallCard ? configCard : filteredItems}
                numColumns={isHorizontal ? 1 : 2}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                horizontal={isHorizontal}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}