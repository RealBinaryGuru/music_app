import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import Slider from "@react-native-community/slider";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

const Musicplayer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.artworkWrapper}>
          <Image
            source={{
              uri: "https://i.guim.co.uk/img/media/8806177a01e00e4afc6d5f04ec4e99a0db9166fb/0_186_3504_2102/master/3504.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=957e0b076838e2758f45b0bf1c505a54",
            }}
            style={styles.artworkImage}
          />
        </View>

        <View>
          <Text style={styles.title}>Song Title</Text>
          <Text style={styles.artist}>Song artist</Text>
        </View>
        <View>
          <Slider
            style={styles.progressContainer}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#FFD369"
            minimumTrackTintColor="#FFD369"
            maximumTrackTintColor="#FFF"
            onSlidingComplete={() => {}}
          />
        </View>
        <View style={styles.progressLabelContainer}>
          <Text style={styles.progressLabelText}>00:00</Text>
          <Text style={styles.progressLabelText}>3:55</Text>
        </View>
        <View style={styles.musicControlls}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="play-skip-back-outline"
              color="#FFD369"
              size={35}
              style={{ marginTop: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ios-pause-circle" color="#FFD369" size={75} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="play-skip-forward-outline"
              color="#FFD369"
              size={35}
              style={{ marginTop: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomControl}>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="repeat" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="share-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={30} color="#777777" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  artworkWrapper: {
    width: 300,
    height: 340,
    marginTop: 25,
    elevation: 5,
  },
  artworkImage: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  title: {
    color: "#EEEEEE",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  artist: {
    fontSize: 16,
    fontWeight: "200",
    color: "#EEEEEE",
    textAlign: "center",
  },
  progressContainer: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: "row",
  },
  progressLabelContainer: {
    width: 340,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressLabelText: { color: "#FFF" },
  musicControlls: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomContainer: {
    borderTopColor: "#393E46",
    borderTopWidth: 1,
    width: width,
    alignItems: "center",
    paddingVertical: 15,
  },
  bottomControl: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});

export default Musicplayer;
