import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import HomeScreen from '../containers/HomeScreen';
import CoinScreen from '../containers/CoinScreen';

const HomeStack = StackNavigator(
  {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: () => null
        }
    },
    Coin: {
        screen: CoinScreen,
        navigationOptions: ({navigation}) => ({
            headerStyle: { backgroundColor: '#393939', shadowColor: 'transparent' },
            headerTitleStyle: { color: 'white' }
        })
    }
  },
  {
    headerMode: 'screen'
  }
);

export default StackNavigator(
  {
    Home: {
      screen: HomeStack
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);