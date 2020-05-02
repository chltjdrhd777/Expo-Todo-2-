import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";
import Todo from "./Todo";

//get the scale of window's hegiht and width
const { width } = Dimensions.get("window");

export default function App() {
  const [state, setState] = useState({ newState: "" });
  const { newState } = state;
  const stateUpdate = (e: any) => {
    setState({ newState: e });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f6e58d" />
      <Text style={styles.title}>Todo</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.inputStyle}
          placeholder={"What I have to do now"}
          placeholderTextColor={"#f53b57"}
          autoCorrect={false}
          value={newState}
          onChangeText={stateUpdate}
        />
        <ScrollView contentContainerStyle={styles.list}>
          <Todo text={"Hello I'm from App"} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6e58d",
    alignItems: "center",
  },

  card: {
    backgroundColor: "#ff7979",
    flex: 1,
    width: width - 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 10,
  },
  inputStyle: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eb2f06",
    fontSize: 25,
  },

  title: {
    color: "#6ab04c",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },

  list: {
    alignItems: "center",
  },
});
