// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { Button } from './helper/element';
import { Container, ImageWrap, TouchWrap } from '../helper';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { AppIcons } from './helper/images';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function PropHeader(props) {
  return (

    <View style={styles.container}>

    <Container height={5} width={100} direction={'row'} verticalAlignment='center'  >
{/* <ImageWrap source={AppIcons.Back} height={5} width={8} /> */}
<TouchWrap  onPress={props.back} >
         
          <Container height={5} verticalAlignment='center'  width={10} marginLeft={4}>
          <Ionicons
 name="chevron-back" size={25} color={'#636263'} />
          </Container>
        </TouchWrap>
        <Container  height={5} width={10} verticalAlignment='center' horizontalAlignment='center'>
            <Text>{props.text || null}</Text>
        </Container>
        <TouchWrap onPress={props.back2}>
<Container  height={5} width={70} verticalAlignment='center' horizontalAlignment='flex-end'>
<Text style={{color:'#2286FE', fontSize:15}}>
  skip Quiz
</Text>
</Container>
</TouchWrap>
</Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
