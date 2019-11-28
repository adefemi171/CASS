import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



import LogIn from '../pages/LogIn';
import Progress from '../pages/Progress';
import PanicButton from '../pages/Alert';
import Profile from '../pages/Profile'
const RootStack = createStackNavigator({

    LogIn:{
        screen: LogIn,
    },
    Progress: {
        screen: Progress,
    },
    PanicButton:{
        screen: PanicButton
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