import React, { Component } from 'react';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import { StyleSheet, Button, View, SafeAreaView, Text, text, number, Alert, TextInput, Image, onChangeText, onChangeNumber, Platform, StatusBar } from 'react-native';

//botones
const Separator = () => (
  <View style={styles.separator} />
);

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
}

//dimensiones logo condor
const styles1 = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
  condorLogo: { 
    width: 300,
    height: 300,
  },
});

const MyAppl = () => {

  const handlePress = () => console.log("Text pressed");

  return (
    <NativeScreenNavigationContainer>
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            style={styles1.condorLogo}
            source={require('./assets/condor.png')}
          />
          <Text style={styles.princ} numberOfLines={1} onPress={handlePress}>CORREO ELECTRÓNICO</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            placeholder="Email"
            value={text}
          />
          <Text style={styles.princ} numberOfLines={1} onPress={handlePress}>CONTRASEÑA</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="password"
            keyboardType="numeric"
          />
        </View>
        <Separator />
        <View>
          <View style={styles.fixToText}>
            <Button
              title="REGISTRARME"
              color= 'purple'
              onPress={() => Alert.alert('Registrarse')}
            />
            <Button
              title="INICIAR SESIÓN"
              color= 'purple'
              onPress={() => Alert.alert('Iniciar Sesión')}
            />
          </View>
          <Text style={styles.title}>
            Olvide mi contraseña !!
          </Text> 
        </View>
      </SafeAreaView>
    </NativeScreenNavigationContainer>
  );
}

export default MyAppl;


//export default DisplayAnImage;


/////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    display: 'flex',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
  },
  textInput: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  princ: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'purple',
    alignItems: 'center',
    textAlign: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

