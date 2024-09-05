import { NavigationContainer } from '@react-navigation/native';
import { MyRootStack } from './src/Router/RootStack';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <MyRootStack></MyRootStack>
      </NavigationContainer>
    </SafeAreaView>
  );
}

