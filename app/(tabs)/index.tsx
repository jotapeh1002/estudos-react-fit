import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native'
import { User } from '../../components/user/User'
import { MessageDinamic } from '../../components/messageDinamic/MessageDinamic'
import { CardMedium } from '../../components/cardMediun/CardMedium'

const usuario = 'Gabriel'
const Card_1 = [
  { id: 'Pizza com amigos', img: require('../../assets/pizza.png'), color: 'rgb(255,160,103)', left: 15, width: 0.54 },
  { id: 'bolos e Rortas', img: require('../../assets/bolo.png'), color: 'rgb(100,150,255)', left: 14, width: 0.54 },
  { id: 'Fechando a noite', img: require('../../assets/prato.png'), color: 'rgb(255,130,255)', left: 15, width: 0.54 },
  { id: 'Salgados', img: require('../../assets/salgados.png'), color: 'rgb(150,100,255)', left: 15, width: 0.54 },
];

export default function Home() {
  return (
    <ScrollView>
      <SafeAreaView style={{ padding: 10 }} >

        <User user={usuario} />
        <MessageDinamic />

        <CardMedium
          smallCard={true}
          label={false}
          button={false}
          configCard={Card_1}
          link={'/'} />

        <CardMedium
          fontSize={17}
          title={'Pos Treino '}
          link={'/exibirDados/'}
          cats='Receitas com Iogurtes Nestlé'
          />

      </SafeAreaView>
    </ScrollView>
  )
}