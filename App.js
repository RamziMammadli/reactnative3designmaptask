import { faBars, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from "./components/Card";

let data = [
  {
    name: "Ramzi Mammadli",
    description: "Code Academy",
    color: "#7EADF3",
  },
  {
    name: "Huseyn Mammadov",
    description: "Code Academy",
    color: "#EB5D7F",
  },
  {
    name: "Revan Zakaryali",
    description: "Code Academy",
    color: "#A87CF3",
  },
  {
    name: "Arrow Func",
    description: "Code Academy",
    color: "#F2AA62",
  },
  {
    name: "Heydar Mammadli",
    description: "Code Academy",
    color: "#68E3C0",
  },
  {
    name: "Elvin Kazimli",
    description: "Code Academy",
    color: "#7EADF3",
  },
  {
    name: "Randy Orton",
    description: "Code Academy",
    color: "#EB5D7F",
  },
  {
    name: "John Cena",
    description: "Code Academy",
    color: "#A87CF3",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{ backgroundColor: "#4FC4F5", borderRadius: 50, padding: 10 }}
        >
          <FontAwesomeIcon icon={faPerson} size={40} />
        </View>
        <View style={{ marginLeft: -85 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Devon Conway</Text>
          <Text style={{ fontSize: 12, color: "grey" }}>@devonconway</Text>
        </View>
        <FontAwesomeIcon icon={faBars} size={20} />
      </View>
      <View style={styles.main}>
        <View style={styles.maintop}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Follow New Friends
          </Text>
          <Text style={{ fontSize: 14, color: "grey" }}>
            Follow Friends You Know
          </Text>
        </View>
        <ScrollView>
          {data.map((item) => (
            <Card
              name={item.name}
              description={item.description}
              color={item.color}
            ></Card>
          ))}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={{paddingHorizontal:60,alignItems:'center', justifyContent:'center', backgroundColor:'#4FC4F5', paddingVertical:12, borderRadius:20}}>
          <Text style={{fontSize:30, fontWeight:'bold', color:'white'}}>
            Let`s Go
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#EBF9FF",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 35,
    paddingTop: 50,
    paddingBottom: 30,
  },
  main: {
    flex: 6,
  },
  maintop: {
    alignItems: "center",
    paddingVertical: 25,
  },
  footer:{
    flex:1.3,
    backgroundColor:'white',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center'
  }
});
