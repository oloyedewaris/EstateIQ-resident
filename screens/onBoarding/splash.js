import { StatusBar } from "expo-status-bar";
import { Container, ImageWrap } from "../../helper/index";
import { AppIcons } from "../../helper/images";
import { useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";


const Splash = (props) => {

  useFocusEffect(
    useCallback(() => {
      const timeoutID = setTimeout(() => props.navigation.navigate("intro1"), 1000);

      return () => {
        clearTimeout(timeoutID);
      };
    }, [])
  )

  return (
    <Container
      flex={1}
      backgroundColor={"#1037B5"}
      verticalAlignment="center"
      horizontalAlignment="center"
    >
      <Container direction="row">
        <ImageWrap
          source={AppIcons.appLogo}
          height={55}
          width={60}
          fit="contain"
        />
      </Container>
      <StatusBar style="auto" />
    </Container>
  );
};
export default Splash;
