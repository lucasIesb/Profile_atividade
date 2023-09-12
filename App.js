import React from 'react';
import { View, StyleSheet } from 'react-native';
import CampoDeLogin from './componentes/Campo_De_Login';

const App = () => {
  return (
    <View style={styles.container}>
      <CampoDeLogin />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
