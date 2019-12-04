import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LogIn from '../Pages/LogIn';
import PanicButton from '../Pages/Alert';
import Profile from '../Pages/Profile';
import Confirm from '../Pages/Confirm';


const RootStack = createStackNavigator({

    LogIn:{
        screen: LogIn,
    },
    Confirm: {
        screen: Confirm,
    },
    // PanicButton:{
    //     screen: PanicButton
    // },
    // Profile: {
    //     screen: Profile
    // },
    // {
    //     initialRouteName: 'SplashScreen',
    // }
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;