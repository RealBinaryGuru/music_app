import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import Musicplayer from "./components/MusicPlayer";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Musicplayer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
