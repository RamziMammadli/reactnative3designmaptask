import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { faBars, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default Card = ({ name, description, color }) => {
  return (
    <View style={styles.mainmiddle}>
      <View style={styles.card}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "60%",
          }}
        >
          <View
            style={{
              backgroundColor: color,
              borderRadius: 50,
              padding: 7,
            }}
          >
            <FontAwesomeIcon icon={faPerson} size={40} />
          </View>
          <View style={{paddingLeft:10}}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{name}</Text>
            <Text style={{ fontSize: 12, color: "grey" }}>{description}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#4FC4F4",
            paddingHorizontal: 15,
            paddingVertical: 7,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white" }}>Following</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#C7C7C7",
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  mainmiddle: {
    paddingHorizontal: 35,
    paddingVertical:15
  },
});
