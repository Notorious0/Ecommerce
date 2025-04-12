import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Navigator } from './src/Navigator'; 
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { StripeProvider } from '@stripe/stripe-react-native';
import store from '../MyApp/src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <StripeProvider publishableKey="pk_test_51Q29vYDRudwWvfk8qgdx2TY3WzICdgjUevsFMLQfTVoNu73gH71BMX1xKWTSUXCafiVWpX2KHfEYjoOK8qczGnJ200Oa1lsMEl">
        <NavigationContainer>
          <StatusBar style="auto" />
          <Navigator />
        </NavigationContainer>
      </StripeProvider>
    </Provider>
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
