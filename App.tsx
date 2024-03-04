import { StyleSheet, Text, View } from "react-native"
import WebView from "react-native-webview"
const url = "http://192.168.1.50:3000"
export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        style={{ width: "100%", height: "100%" }}
        source={{ uri: "http://192.168.1.50:3000" }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
