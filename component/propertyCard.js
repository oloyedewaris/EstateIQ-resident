// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { Button } from './helper/element';
import { Container, ImageWrap, TouchWrap } from '../helper';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { AppIcons } from './helper/images';
// import { AppIcons } from './helper/images';



export default function PropertyCard(props) {
  return (


<Container padding={3} width={90} borderRadius={8} borderWidth={1} borderColor={'#D8E7F9'} direction={'row'}  >
  <Container   horizontalAlignment='center' verticalAlignment='center' width={25} height={15}> 
  <Container>
<ImageWrap source={props.image || null} height={16} width={25} borderRadius={8} />
  </Container>
  
  </Container>
  <Container padding={1}  paddingTop={1}  marginLeft={4} >
    <Container  padding={1} verticalAlignment='center' marginTop={-1}  >
  <Text style={{fontSize:20, color:'#011936', fontWeight:'500'}}>{props.text || null}</Text>
  </Container>
  <Container  padding={1} verticalAlignment='center' marginTop={-1}  >
  <Text style={{fontSize:14 ,color:'#5E6D85'}}>{props.text2 || null}</Text>
  </Container>
  <Container  padding={1} verticalAlignment='center' marginTop={1}  >
  <Text style={{fontSize:12 ,color:'#011936' ,fontWeight:'600'}}>{props.text3 || null}</Text>
  </Container>
  {/* <Container  verticalAlignment='center'  padding={1} marginTop={-1}  width={70}  >
  <Text style={{ fontSize:15, color:'#5E6D85'}}>sfsdfsd</Text>
  </Container> */}
  </Container>


</Container>




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
