import Login from "../screens/onBoarding/login";
import Signup from "../screens/onBoarding/signup";
import Splash from "../screens/onBoarding/splash";
import Intro4 from "../screens/onBoarding/intro4";
import Intro1 from "../screens/onBoarding/intro1";
import Intro2 from "../screens/onBoarding/intro2";
import Intro3 from "../screens/onBoarding/intro3";
import Signup2 from "../screens/onBoarding/signup2";
import { createStackNavigator } from "@react-navigation/stack";
import OTP from "../screens/onBoarding/otp";
import Forgetpassword from "../screens/onBoarding/forgetpassword";
import SetEstate from "../screens/selectEstate";


const AuthContainer = () => {
  const Stack = createStackNavigator<any>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="intro1" component={Intro1} options={{ headerShown: false }} />
      <Stack.Screen name="intro2" component={Intro2} options={{ headerShown: false }} />
      <Stack.Screen name="intro3" component={Intro3} options={{ headerShown: false }} />
      <Stack.Screen name="intro4" component={Intro4} options={{ headerShown: false }} />
      <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="signup2" component={Signup2} options={{ headerShown: false }} />
      <Stack.Screen name="forgetpassword" component={Forgetpassword} options={{ headerShown: false }} />
      <Stack.Screen name="otp" component={OTP} options={{ headerShown: false }} />
      <Stack.Screen name="setEstate" component={SetEstate} options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}

export default AuthContainer;