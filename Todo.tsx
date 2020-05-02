import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

//TouchableOpacity = give click action and opacity transformation
//onPress = like onClick
//Component<P,S> = p is proptype, s is statetype
export default class Todo extends Component<{text:string}> {
  state = { isEditing: false, isCompleted: false };
  toggleAction = () => {
    this.setState((preState: { isCompleted: boolean; isEditing: boolean }) => {
      return { isCompleted: !preState.isCompleted };
    });
  };
  edittingAction = () => {
    this.setState({ isEditing: true });
  };
  edittingFinish = () => {
    this.setState({ isEditing: false });
  };

  render() {
    const { isCompleted, isEditing } = this.state;
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <TouchableOpacity onPress={this.toggleAction}>
            <View
              style={[
                styles.circle,
                isCompleted ? styles.completedColor : styles.unCompColor,
              ]}
            />
          </TouchableOpacity>
          <Text
            style={[
              styles.text,
              isCompleted ? styles.textAniOn : styles.textAniOff,
            ]}
          >
            {text}
          </Text>
        </View>
        {isEditing ? (
          <View>
            <TouchableOpacity onPress={this.edittingFinish}>
              <View>
                <Text>ok</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.action}>
            <TouchableOpacity onPress={this.edittingAction}>
              <View style={styles.actionContainer}>
                <Text>edit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.actionContainer}>
                <Text>delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 80,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 15,
    fontWeight: "700",
    marginVertical: 10,
  },
  //borderRadius always should be the half of width and height
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 15,
    borderWidth: 8,
  },
  completedColor: {
    borderColor: "#95a5a6",
  },
  unCompColor: {
    borderColor: "#f6e58d",
  },
  textAniOn: { color: "#95a5a6", textDecorationLine: "line-through" },
  textAniOff: { color: "black" },
  column: {
    flexDirection: "row",
    alignItems: "center",
  },
  action: {
    flexDirection: "row",
  },
  actionContainer: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
});
