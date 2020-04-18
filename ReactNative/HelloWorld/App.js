import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

const [name, setName] = useState('shaun');
const [name1, setName1] = useState('shaun');

  return (
    <View
        style={{
            flex:1,
            alignItems:"center"
        }}>
        <View
            style={{
            flex:1,
            flexDirection:'row',
            justifyContent: "center",
            alignItems: "center"
            }}>
                <Text>Wpisz Imie</Text>
                <TextInput style = {{
                borderColor: '#777',
                borderWidth:1,
                padding:8,
                margin:10,
                width:200
                }}
                placeholder = 'Wpisz imie'
                onChangeText = {(val) => setName(val)}
            />
            </View>
                <View
                    style= {{
                            flex:1,
                            alignItems: "center"
                    }}>
                    <Button title = 'submit' color= '#a6a6a6' onPress={()=> setName1(name)} />
                    <Text>Twoje imie: {name1}</Text>
                </View>
        </View>
  );
}

