import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Movies from './screens/Movies';
import Details from './screens/Details';

const Routes = createAppContainer(
  createStackNavigator({
    Movies:{
      screen: Movies,
      navigationOptions:{
        headerShown: false,
      }
    },
    Details:{
      screen:Details,
      navigationOptions:{
        headerShown: false
      }
    }
  },
  {
     defaultNavigationOptions:{
      headerTintColor:'#FFF', 
      headerStyle:{
         backgroundColor:'#5ca0d3'
       }
     }
  })
);

export default Routes;