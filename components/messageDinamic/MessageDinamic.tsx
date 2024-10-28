import { StyleSheet, View, Text, Image } from 'react-native'

const sugestionsData = () => {
    const hours = new Date().getHours();
  
    if (hours >= 5 && hours < 11) {
      return "Bom dia! Que tal um café? ☕";
    } else if (hours >= 11 && hours < 14) {
      return "Bom almoço! 🍽️";
    } else if (hours >= 14 && hours < 18) {
      return "Boa tarde! Um lanche talvez? 🥪";
    } else if (hours >= 18 && hours < 22) {
      return "Hora do jantar! 🌆";
    } else {
      return "Hora de descansar! 🌙";
    }
  }

export function MessageDinamic() {
  return (
    <>
        <Text style={{marginTop: 40,fontSize: 21, paddingVertical: 10, marginBottom:10}} > {sugestionsData()} </Text>
    </>
  )
}