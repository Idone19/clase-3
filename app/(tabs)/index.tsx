import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

export default function HomeScreen() {
  const [colorCaja1, setColorCaja1] = useState('red');

  const cambiarColorCaja1 = () => {
    setColorCaja1(colorCaja1 === 'red' ? 'blue' : 'red');
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={[styles.caja, { backgroundColor: colorCaja1 }]}
        onPress={cambiarColorCaja1}>
        <Text style={styles.texto}>Caja 1</Text>
      </TouchableOpacity>

      <View style={[styles.caja, { backgroundColor: 'green' }]}>
        <Text style={styles.texto}>Caja 2</Text>
      </View>

      <View style={[styles.caja, { backgroundColor: 'orange' }]}>
        <Text style={[styles.texto, { color: '#ffffff' }]}>Caja 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    alignItems: 'center', 
    backgroundColor: '#1E3A8A',
    paddingHorizontal: 10,
  },
  caja: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 5,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  texto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});
