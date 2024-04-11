import { StyleSheet, Text, View } from "react-native"
import WebView from "react-native-webview"
const url = "http://" + "ovpn.sunnylof123.xyz"
export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        style={{
          width: "100%",
          height: "100%",
        }}
        source={{ uri: url }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    paddingBottom: 20,
    backgroundColor: "black"
  },
})
