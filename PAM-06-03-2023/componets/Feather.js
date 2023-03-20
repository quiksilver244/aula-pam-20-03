import {  Text, View } from 'react-native';
import { Feather   } from '@expo/vector-icons'; 
import styles from './style';
export default function  feather() {
    return (
      
 <View style={styles.familia_icones}>
      <Text>Feather </Text>
      <View style={styles.lista_icones}> 
       <Feather style={styles.espaco_icones} name="alert-triangle" size={24} color="#FF0000" />
       <Text>alert-triangle</Text>
       </View>
       <View>
       <Feather style={styles.espaco_icones} name="anchor" size={24} color="#363636" />
       <Text>anchor</Text>
       </View>
       <View><Feather style={styles.espaco_icones} name="bluetooth" size={24} color="#4169E1" />
       <Text>bluetooth</Text>
       </View>
       <View><Feather style={styles.espaco_icones} name="camera" size={24} color="black" />
       <Text>camera</Text>
       </View>
       <View>
        <Feather style={styles.espaco_icones} name="cloud-rain" size={24} color="#000080" />
        <Text>cloud-rain</Text>
      </View>
    </View>
    )};  