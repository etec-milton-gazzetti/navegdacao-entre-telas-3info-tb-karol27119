import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tela inicial</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('About')}>
        <Text>Ir para tela de Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}

  function AboutScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tela de Sobre</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();
    
  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
