import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LogIn from '../Pages/LogIn';
import ProgressBar from '../Pages/ProgressBar';
import SendAlert from '../Pages/SendAlert';
import ReceiveAlert from '../Pages/ReceiveAlert';
import Profile from '../Pages/Profile';


const RootStack = createStackNavigator({

    LogIn:{
        screen: LogIn,
    },
    // ProgressBar: {
    //     screen: ProgressBar,
    // },
    SendAlert:{
        screen: SendAlert,
    },
    ReceiveAlert: {
        screen: ReceiveAlert,
    },
    Profile: {
        screen: Profile
    },
    // {
    //     initialRouteName: 'SplashScreen',
    // }
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;