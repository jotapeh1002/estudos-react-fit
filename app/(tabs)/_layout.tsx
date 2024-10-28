import { Tabs, Stack } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign'
import Fontisto from '@expo/vector-icons/Fontisto'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function TabLayout() {
  return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'rgb(255,100,0)',
          headerShown: false,
          tabBarStyle: { height: 65 },
          tabBarLabelStyle: { fontSize: 14 }
        }}>

        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ focused, color, size }) => {
              return focused ? <Ionicons name='home' color={color} size={size} />
                : <Ionicons name="home-outline" color={color} size={size} />
            },
          }}
        />

        <Tabs.Screen
          name="categorias/index"
          options={{
            title: 'Categorias',
            tabBarIcon: ({ focused, color, size }) => {
              return focused ? <AntDesign name="appstore1" size={size} color={color} />
                : <AntDesign name="appstore-o" size={size} color={color} />

            },
          }}
        />

        <Tabs.Screen
          name="pesquisas/index"
          options={{
            title: 'Pesquisas',
            tabBarIcon: ({ color, size }) => {
              return <Fontisto name="search" size={size} color={color} />
            },
          }}
        />

        <Tabs.Screen
          name="favoritos/index"
          options={{
            title: 'Favoritos',
            tabBarIcon: ({ focused, color, size }) => {
              return focused ?
                <FontAwesome name='heart' color={color} size={size} />
                : <FontAwesome name='heart-o' color={color} size={size} />
            },
          }}
        />

      </Tabs>
  )
}
