import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './ios/src/screens/Dashboard';

const App = () => {
  return (
    <View  style = {styles.container}>
      <Dashboard />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default App;