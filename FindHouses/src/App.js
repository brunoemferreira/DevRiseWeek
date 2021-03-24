import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Bem Vindo Ä DevRise Week</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionView: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
});

export default App;
